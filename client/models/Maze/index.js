import * as THREE from 'three'
import GameObject from '../../commons/GameObject'
import Tile, { TILE_TYPE } from './Tile'
import { create2DArray } from '../../utils/index'


class Maze extends GameObject {
  constructor({width, height}) {
    super()
    this.tileMap = null
    this.tiles = null
    this.ground = null
    this.width = width
    this.height = height
    this.origin = {
      x: -width / 2,
      y: 0,
      z: -height / 2
    }
  }

  init() {
    // maze ground
    const mazeGeometry = new THREE.PlaneBufferGeometry(this.width, this.height).rotateX(-Math.PI / 2)
    const mazeMaterial = new THREE.MeshBasicMaterial({color: 0x3c3c3c, side: THREE.DoubleSide})
    this.ground = new THREE.Mesh(mazeGeometry, mazeMaterial)

    const tileMap = this.generateTileMap(this.width, this.height)
    this.tileMap = tileMap.map
    this.tiles = tileMap.tiles
    this.tileBlocks = []
    this.tiles.forEach((tile) => {
      const tileBlock = tile.getTileBlock(this.origin)
      if (tileBlock) {
        this.tileBlocks.push(tileBlock)
      }
    })
  }

  update() {}

  render(scene) {
    if (this.hidden) {
      scene.remove(this.ground)
      return
    }

    // render objects
    scene.add(this.ground)
    this.tileBlocks.forEach((tileBlock) => {
      scene.add(tileBlock)
    })
  }

  generateTileMap(width, height) {
    const twoDArray = []
    const tiles = []
    for (let row = 0; row < height; row++) {
      const rowArray = []
      for (let col = 0; col < width; col++) {
        let tile = null
        if (col % 5 === 0) {
          tile = new Tile(row, col, TILE_TYPE.WALL)
        } else {
          tile = new Tile(row, col)
        }
        rowArray.push(tile)
        tiles.push(tile)
      }
      twoDArray.push(rowArray)
    }
    return {
      map: twoDArray,
      tiles
    }
  }
}

export default Maze
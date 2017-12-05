import * as THREE from 'three'
import GameObject from '../../../../commons/GameObject'
import Tile, { TILE_TYPE } from './Tile/Tile'
import sceneManager from '../../../../commons/managers/sceneManager'


class Maze extends GameObject {
  constructor(id, {width, height}) {
    super(id)
    this.tileMap = null
    this.tiles = null
    this.ground = null
    this.width = width
    this.height = height
    this.origin = { x: -width / 2, y: 0, z: -height / 2 }
  }

  init() {
    // maze ground
    const mazeGeometry = new THREE.PlaneBufferGeometry(this.width, this.height).rotateX(-Math.PI / 2)
    const mazeMaterial = new THREE.MeshBasicMaterial({color: 0x3c3c3c, side: THREE.DoubleSide})
    this.ground = new THREE.Mesh(mazeGeometry, mazeMaterial)
    this.ground.position.setY(-0.01)

    // tiles
    const tileMap = this.generateTileMap(this.width, this.height)
    this.tileMap = tileMap.map
    this.tiles = tileMap.tiles
    this.tiles.forEach((tile) => {
      this.add(tile)
    })
    super.init()
  }

  update() {
    super.update()
  }

  render() {
    if (this.hidden) return this.clear()
    sceneManager.getCurScene().add(this.ground)
    super.render()
  }

  clear() {
    sceneManager.getCurScene().remove(this.ground)
    super.clear()
  }

  generateTileMap(width, height) {
    const twoDArray = []
    const tiles = []
    for (let row = 0; row < height; row++) {
      const rowArray = []
      for (let col = 0; col < width; col++) {
        let tile = null
        if (col % 5 === 0) {
          tile = new Tile(this.origin, row, col, TILE_TYPE.WALL)
        } else {
          tile = new Tile(this.origin, row, col)
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
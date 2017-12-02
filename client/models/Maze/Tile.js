import * as THREE from 'three'
import GameObject from '../../commons/GameObject';


export const TILE_TYPE = {
  GROUND: 'ground',
  WALL: 'wall'
}

const TILE_META = {
  ground: {
    color: 0xd3d3d3
  },
  wall: {
    color: 0xffff00
  }
}


class Tile extends GameObject {
  constructor(origin, row, col, type = TILE_TYPE.GROUND) {
    super()
    this.origin = origin
    this.row = row
    this.col = col
    this.type = type
    this.size = 1
    this.meta = TILE_META[this.type]

    for (let key in this.meta) {
      if (this.meta.hasOwnProperty(key)) {
        this[key] = this.meta[key]
      }
    }
  }

  init() {
    this.mesh = this.getTileBlockMesh()
    super.init()
  }

  update() {
    super.update()
  }
  
  render(scene) {
    if (this.hidden) return this.clear()
    if (this.mesh) {
      scene.add(this.mesh)
    }
    super.render(scene)
  }

  clear() {
    Aquarae.curScene.remove(this.mesh)
    super.clear()
  }

  getTileBlockMesh() {
    const tileBlockGeometry = new THREE.BoxBufferGeometry(this.size, this.size, this.size)
    const wallBlockMaterial = new THREE.MeshBasicMaterial({ color: this.color })
    const block = new THREE.Mesh(tileBlockGeometry, wallBlockMaterial)
    const halfTileSize = this.size/2

    switch (this.type) {
      case TILE_TYPE.WALL:
        block.position.set(this.origin.x + this.col + halfTileSize, halfTileSize, this.origin.z + this.row + halfTileSize)
        return block
        break
      default:
        return null
        break
    }
  }
}

export default Tile
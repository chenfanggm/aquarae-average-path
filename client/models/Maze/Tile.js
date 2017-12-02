import * as THREE from 'three'



export const TILE_TYPE = {
  GROUND: 'ground',
  WALL: 'wall'
}

const TILE_META = {
  ground: {
    color: '0xd3d3d3'
  },
  wall: {
    color: '0x3c3c3c'
  }
}

const tileSize = 1
const tileBlockGeometry = new THREE.BoxBufferGeometry(tileSize, tileSize, tileSize)
const wallBlockMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00})

class Tile {
  constructor(row, col, type = TILE_TYPE.GROUND) {
    this.row = row
    this.col = col
    this.type = type
    this.meta = TILE_META[this.type]
    this.size = tileSize

    for (let key in this.meta) {
      if (this.meta.hasOwnProperty(key)) {
        this[key] = this.meta[key]
      }
    }
  }

  getTileBlock(origin) {
    switch (this.type) {
      case TILE_TYPE.WALL:
        const block = new THREE.Mesh(tileBlockGeometry, wallBlockMaterial)
        block.position.set(origin.x + this.col + tileSize/2, tileSize/2, origin.z + this.row + tileSize/2)
        return block
        break
      default:
        break
    }
  }
}

export default Tile
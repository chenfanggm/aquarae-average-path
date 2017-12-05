import * as THREE from 'three'
import objectManager from './managers/objectManager'


class GameObject extends THREE.Object3D {
  constructor(id) {
    super()
    this.name = id || ''
    objectManager.add(id || this.id, this)
  }

  init() {
    this.children.forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.init === 'function')
        obj.init()
    })
  }

  update() {
    this.children.forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.update === 'function')
        obj.update()
    })
  }

  render() {
    this.children.forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.render === 'function')
        obj.render()
    })
  }

  clear() {
    this.children.forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.clear === 'function')
        obj.clear()
    })
  }
}

export default GameObject
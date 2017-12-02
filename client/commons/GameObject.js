import * as THREE from 'three'


class GameObject extends THREE.Object3D {
  constructor() {
    super()
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

  render(scene) {
    this.children.forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.render === 'function')
        obj.render(scene)
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
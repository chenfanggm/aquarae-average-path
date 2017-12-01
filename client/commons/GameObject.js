import * as THREE from 'three'


class GameObject extends THREE.Object3D {
  constructor(name) {
    super()
    this.name = name
  }
}

export default GameObject
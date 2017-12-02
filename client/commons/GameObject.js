import * as THREE from 'three'


class GameObject extends THREE.Object3D {
  constructor() {
    super()
  }

  init() {
    throw new Error('Every game object must implement an init function')
  }

  update() {
    throw new Error('Every game object must implement a update function')
  }

  render() {
    throw new Error('Every game object must implement a render function')
  }
}

export default GameObject
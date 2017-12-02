import * as THREE from 'three'
import GameObject from '../commons/GameObject';


class AmbientLight extends GameObject {
  constructor() {
    super()

  }

  init() {
    super.init()
  }

  update() {
    super.update()
  }

  render(scene) {
    super.render(scene)
  }

  clear() {
    Aquarae.curScene.remove(this.mesh)
    super.clear()
  }
}

export default AmbientLight
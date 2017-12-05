import * as THREE from 'three'
import GameObject from '../../../commons/GameObject';
import sceneManager from '../../../commons/managers/sceneManager'


class Template extends GameObject {
  constructor() {
    super()
  }

  init() {
    super.init()
  }

  update() {
    super.update()
  }

  render() {
    super.render()
  }

  clear() {
    sceneManager.getCurScene().remove(this.mesh)
    super.clear()
  }
}

export default Template
import * as THREE from 'three'
import GameObject from '../../../commons/GameObject'
import sceneManager from '../../../commons/sceneManager'


class AmbientLight extends GameObject {
  constructor(id, opts = {}) {
    super(id)
    this.color = opts.color || 0xFFFFFF
    this.intensity = opts.intensity || 1
    if (opts.position) {
      this.position.set(opts.position.x, opts.position.y, opts.position.z)
    }
  }

  init() {
    this.mesh = new THREE.AmbientLight(this.color, this.intensity)
    this.mesh.position.set(this.position.x, this.position.y, this.position.z)
    super.init()
  }

  update() {
    this.mesh.position.set(this.position.x, this.position.y, this.position.z)
    super.update()
  }

  render() {
    if (this.hidden) return this.clear()
    sceneManager.getCurScene().add(this.mesh)
    super.render()
  }

  clear() {
    sceneManager.getCurScene().remove(this.mesh)
    super.clear()
  }
}

export default AmbientLight
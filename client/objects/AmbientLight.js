import * as THREE from 'three'
import GameObject from '../commons/GameObject';


class AmbientLight extends GameObject {
  constructor(opts = {}) {
    super()

    this.color = opts.color || 0xFFFFFF
    this.mesh = new THREE.AmbientLight(this.color)
    if (opts.position) {
      this.position.set(opts.position.x, opts.position.y, opts.position.z)
    }
  }

  init() {
    this.mesh.position.set(this.position.x, this.position.y, this.position.z)
    super.init()
  }

  update() {
    this.mesh.position.set(this.position.x, this.position.y, this.position.z)
    super.update()
  }

  render(scene) {
    if (this.hidden) return this.clear()

    scene.add(this.mesh)
    super.render(scene)
  }

  clear() {
    Aquarae.curScene.remove(this.mesh)
    super.clear()
  }
}

export default AmbientLight
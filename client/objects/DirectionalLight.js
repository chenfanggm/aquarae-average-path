import * as THREE from 'three'
import GameObject from '../commons/GameObject';


class DirectionalLight extends GameObject {
  constructor(opts = {}) {
    super()

    this.color = opts.color || 0xFFFFFF
    this.intensity = opts.intensity || 1
    this.target = opts.target || new THREE.Vector3(0, 0, 0)
    if (opts.position) {
      this.position.set(opts.position.x, opts.position.y, opts.position.z)
    }

    this.mesh = new THREE.DirectionalLight(this.color, this.intensity)
  }

  init() {
    this.mesh.position.set(this.position.x, this.position.y, this.position.z)
    this.mesh.target = this.target
    super.init()
  }

  update() {
    this.mesh.position.set(this.position.x, this.position.y, this.position.z)
    this.mesh.target = this.target
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

export default DirectionalLight
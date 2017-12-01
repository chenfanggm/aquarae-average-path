import * as THREE from 'three'
import GameObject from "../commons/GameObject";


class BigBall extends GameObject{
  constructor(name) {
    super(name)
    const material = new THREE.MeshPhongMaterial({
      color: 0x80FC66,
      specular: 0xFFFFFF,
      shininess: 100,
      opacity: 0.5,
      transparent: true }
    )
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry( 15, 16, 16 ), material )
  }

  init(scene) {
    scene.add(this.mesh)
  }

  render(scene) {
    if (!this.hidden) {
      scene.add(this.mesh)
    }
    this.mesh.position.x += 1
  }
}

export default BigBall
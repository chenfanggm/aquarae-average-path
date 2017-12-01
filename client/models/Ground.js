import * as THREE from 'three'


class BigBall {
  constructor(name) {
    const material = new THREE.MeshPhongMaterial({
      color: 0x80FC66,
      specular: 0xFFFFFF,
      shininess: 100,
      opacity: 0.5,
      transparent: true }
    )
    const bigBall = new THREE.Mesh(new THREE.SphereGeometry( 15, 16, 16 ), material )
    bigBall.name = name

    return bigBall
  }
}

export default BigBall
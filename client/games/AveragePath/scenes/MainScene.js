import dat from 'dat-gui'
import * as THREE from 'three'
import '../../../commons/libs/OrbitAndPanControls.new'
import Scene from '../../../commons/Scene'
import BigBall from '../../../models/BigBall'


class MainScene extends Scene {

  init() {
    this.objects.add(new BigBall('bigBall'))

    const ambientLight = new THREE.AmbientLight(0xFFFFFF)
    ambientLight.position.set(100, 100, 100)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8)
    directionalLight.position.set(100, 100, 100 )
    directionalLight.target = this.objects.get('bigBall')
    this.scene.add(directionalLight)

    // init game object
    super.init()
  }

  render() {
    super.render()
  }
}

export default MainScene
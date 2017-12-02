import dat from 'dat-gui'
import * as THREE from 'three'
import '../../../libs/OrbitAndPanControls.new'
import Scene from '../../../commons/Scene'
import BigBall from '../../../models/BigBall'


class MainScene extends Scene {

  init() {
    // controller
    this.cameraControls = new THREE.OrbitAndPanControls(Aquarae.mainCamera, Aquarae.renderer.domElement)
    this.cameraControls.target.set(0,0,0)

    // objects
    this.objects.add('bigBall', new BigBall())

    const ambientLight = new THREE.AmbientLight(0xFFFFFF)
    ambientLight.position.set(100, 100, 100)
    this.objects.add('ambientLight', ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8)
    directionalLight.position.set(100, 100, 100 )
    directionalLight.target = this.objects.get('bigBall')
    this.objects.add('directionalLight', directionalLight)

    // init game object
    super.init()
  }

  update() {
    const delta = Aquarae.clock.getDelta()
    this.cameraControls.update(delta)
    super.update()
  }
}

export default MainScene
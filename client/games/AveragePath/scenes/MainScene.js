import dat from 'dat-gui'
import * as THREE from 'three'
import helper from '../../../utils/helper'
import '../../../libs/OrbitAndPanControls.new'
import Scene from '../../../commons/Scene'
import Maze from '../../../models/Maze'


class MainScene extends Scene {

  constructor() {
    super()
    // camera
    this.cameraFov = 45
    this.cameraNear = 0.1
    this.cameraFar = 1000
    this.cameraAspect = Aquarae.width/Aquarae.height
    this.cameraPosY = 15
    this.mainCamera = new THREE.PerspectiveCamera(this.cameraFov, this.cameraAspect, this.cameraNear, this.cameraFar)
    // controller
    this.cameraControls = new THREE.OrbitAndPanControls(this.mainCamera, Aquarae.renderer.domElement)
    // objects
    this.mazeWidth = 50
    this.mazeHeight = 50
  }

  init() {
    // camera
    this.mainCamera.position.set(0, this.cameraPosY, 0)
    this.cameraControls.target.set(0, 0, 0)
    //this.mainCamera.lookAt(0, 0, 0)

    // resources
    this.objects.add('maze', new Maze({width: this.mazeWidth, height: this.mazeHeight}))

    // light
    this.setupLight()
    // helper
    this.setupHelper(true)
    // init everything in this.objects
    super.init()
  }

  update() {
    const delta = Aquarae.clock.getDelta()
    this.cameraControls.update(delta)
    super.update()
  }

  setupLight() {
    const ambientLight = new THREE.AmbientLight(0xFFFFFF)
    ambientLight.position.set(100, 100, 100)
    this.objects.add('ambientLight', ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8)
    directionalLight.position.set(100, 100, 100 )
    directionalLight.target = this.objects.get('maze')
    this.objects.add('directionalLight', directionalLight)
  }

  setupHelper(isOn) {
    if (isOn) {
      helper.renderOriginIndicator(this.scene)
    }
  }
}

export default MainScene
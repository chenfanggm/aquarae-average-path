import dat from 'dat-gui'
import * as THREE from 'three'
import helper from '../../../utils/helper'
import '../../../libs/OrbitAndPanControls.new'
import Scene from '../../../commons/Scene'
import Maze from '../../../models/Maze'
import AmbientLight from "../../../models/AmbientLight";
import DirectionalLight from "../../../models/DirectionalLight";


class MainScene extends Scene {

  constructor() {
    super()
    // camera
    this.cameraFov = 45
    this.cameraNear = 0.1
    this.cameraFar = 1000
    this.cameraAspect = Aquarae.width/Aquarae.height
    this.cameraPosition = new THREE.Vector3(0, 50, 40)
    // objects
    this.mazeWidth = 50
    this.mazeHeight = 50
  }

  init() {
    // camera
    this.mainCamera = new THREE.PerspectiveCamera(this.cameraFov, this.cameraAspect, this.cameraNear, this.cameraFar)
    this.mainCamera.position.set(this.cameraPosition.x, this.cameraPosition.y, this.cameraPosition.z)
    this.mainCamera.lookAt(0, 0, 0)

    // controller
    this.cameraControls = new THREE.OrbitAndPanControls(this.mainCamera, Aquarae.renderer.domElement)
    this.cameraControls.target.set(0, 0, 5)

    // resources
    this.add('maze', new Maze({ width: this.mazeWidth, height: this.mazeHeight }))
    this.add('ambientLight', new AmbientLight({ position: new THREE.Vector3(100, 100, 100) }))
    this.add('directionalLight', new DirectionalLight({
      position: new THREE.Vector3(100, 100, 100),
      target: this.objects.get('maze')
    }))

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

  setupHelper(isOn) {
    if (isOn) {
      helper.renderOriginIndicator(this.scene)
    }
  }
}

export default MainScene
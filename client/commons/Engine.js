import $ from 'jquery'
import * as THREE from 'three'
import serviceManager from '../services/serviceManager'


class Engine {
  constructor(opts = {}) {
    const { canvasDom, width, height, bgColor  } = opts

    this.runningLoop = null
    this.canvasDom = canvasDom
    this.bgColor = bgColor
    this.curScene = new THREE.Scene()
    this.width = width
    this.height = height
    this.devicePixelRatio = window.devicePixelRatio || 1

    // camera
    this.cameraFov = 45
    this.cameraAspect = width/height
    this.cameraNear = 0.1
    this.cameraFar = 4000
    this.camera = new THREE.PerspectiveCamera(this.cameraFov, this.cameraAspect, this.cameraNear, this.cameraFar)
    this.camera.position.set(20,20,70)
    this.cameraControls.target.set(0,0,0);

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.gammaInput = true
    this.renderer.gammaOutput = true
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(this.bgColor, 1)
    this.cameraControls = new THREE.OrbitAndPanControls(this.camera, this.renderer.domElement)
    this.textureLoader = new THREE.TextureLoader()
    this.clock = new THREE.Clock()

    // canvas DOM
    this.canvasDom.appendChild(this.renderer.domElement)

    this.sceneService = serviceManager.getService('sceneService')
    this.objectService = serviceManager.getService('objectService')
  }

  start() {}

  reload() {
    this.clear()

    // refresh process
    init()
    setupGUI()
    fillScene()
    this.runningLoop = this.animate()
    console.info('engine reloaded')
  }

  clear() {
    // clean animation
    if (this.runningLoop) {
      cancelAnimationFrame(this.runningLoop)
    }

    // clean scene objects
    if (this.curScene.children) {
      this.curScene.children.forEach((obj) => {
        this.curScene.remove(obj)
      })
    }
    const objects = this.objectService.getAll()
    objects.forEach((key) => {
      this.curScene.remove(objects[key])
    })
    this.objectService.clearAll()

    // clean GUI
    $('.dg.ac').empty()

    // clean canvas
    if (this.canvasDom.childNodes[0]) {
      this.canvasDom.removeChild(this.canvasDom.childNodes[0])
    }
  }

  animate() {
    this.runningLoop = window.requestAnimationFrame(this.animate)
    this.render()
  }

  render() {
    const delta = clock.getDelta();
    cameraControls.update(delta);

    if ( MAIN.GUI.newGridX !== MAIN.COORDINATES.gridX ||
      MAIN.GUI.newGridY !== MAIN.COORDINATES.gridY ||
      MAIN.GUI.newGridZ !== MAIN.COORDINATES.gridZ ||
      MAIN.GUI.newGround !== MAIN.COORDINATES.ground ||
      MAIN.GUI.newAxes !== MAIN.COORDINATES.axes) {

      MAIN.COORDINATES.gridX = MAIN.GUI.newGridX
      MAIN.COORDINATES.gridY = MAIN.GUI.newGridY
      MAIN.COORDINATES.gridZ = MAIN.GUI.newGridZ
      MAIN.COORDINATES.ground = MAIN.GUI.newGround
      MAIN.COORDINATES.axes = MAIN.GUI.newAxes

      fillScene()
    }

    renderer.render(MAIN.SCENE, camera)
  }

  setScene(scene) {
    this.curScene = scene
  }
}

export default Engine
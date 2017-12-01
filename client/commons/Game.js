import * as THREE from 'three'
import SceneManager from './SceneManager';


class Game {
  constructor(opts = {}) {
    const { canvasDom, width, height } = opts

    this.curScene = null
    this.runningLoop = null
    this.canvasDom = canvasDom
    this.bgColor = 0xDDDDDD
    this.width = width
    this.height = height
    this.devicePixelRatio = window.devicePixelRatio || 1

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.gammaInput = true
    this.renderer.gammaOutput = true
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(this.bgColor, 1)

    // camera
    this.cameraFov = 45
    this.cameraAspect = this.width/this.height
    this.cameraNear = 0.1
    this.cameraFar = 4000
    this.camera = new THREE.PerspectiveCamera(this.cameraFov, this.cameraAspect, this.cameraNear, this.cameraFar)
    this.camera.position.set(20, 20, 70)
    this.cameraControls = new THREE.OrbitAndPanControls(this.camera, this.renderer.domElement)
    this.cameraControls.target.set(0,0,0)

    this.clock = new THREE.Clock()
    this.textureLoader = new THREE.TextureLoader()

    this.sceneManager = new SceneManager()

    this.animate = this.animate.bind(this)
  }

  reload() {
    this.clear()
    this.start()
  }

  start() {
    this.init()
    this.runningLoop = this.animate()
    console.info('Game started...')
  }

  init() {
    this.sceneManager.getAll().forEach((scene) => {
      scene.init()
    })
    this.render()
    this.canvasDom.appendChild(this.renderer.domElement)
  }

  animate() {
    this.runningLoop = window.requestAnimationFrame(this.animate)
    this.render()
  }

  render() {
    const delta = this.clock.getDelta()
    this.cameraControls.update(delta)
    this.curScene.render()
    this.renderer.render(this.curScene.scene, this.camera)
  }

  clear() {
    // clean animation
    if (this.runningLoop)
      cancelAnimationFrame(this.runningLoop)
    // clean scene objects
    if (this.curScene)
      this.curScene.clear()
    // clean canvas
    if (this.canvasDom.childNodes[0])
      this.canvasDom.removeChild(this.canvasDom.childNodes[0])
  }

  setCurScene(scene) {
    this.curScene = scene
  }
}


export default Game
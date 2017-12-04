import * as THREE from 'three'
import objectManager from './objectManager'
import sceneManager from './sceneManager'


class Game {
  constructor(opts = {}) {
    const { canvasDom, width, height } = opts
    // meta
    this.runningLoop = null
    this.canvasDom = canvasDom
    this.width = width || window.innerWidth/1.2
    this.height = height || window.innerHeight/1.2
    this.bgColor = 0xDDDDDD
    this.devicePixelRatio = window.devicePixelRatio || 1
    // camera
    this.cameraFov = 45
    this.cameraNear = 0.1
    this.cameraFar = 1000
    this.cameraAspect = this.width / this.height
    this.mainCamera = new THREE.PerspectiveCamera(this.cameraFov, this.cameraAspect, this.cameraNear, this.cameraFar)
    objectManager.add('mainCamera', this.mainCamera)
    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.gammaInput = true
    this.renderer.gammaOutput = true
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(this.bgColor, 1)
    objectManager.add('renderer', this.renderer)
    // bind
    this.loop = this.loop.bind(this)
  }

  reload() {
    this.clear()
    this.start()
  }

  start() {
    this.init()
    this.loop()
    console.info('Game started...')
  }

  init() {
    sceneManager.getCurScene().init()
    this.update()
    this.render()
    this.canvasDom.appendChild(this.renderer.domElement)
  }

  loop() {
    this.runningLoop = window.requestAnimationFrame(this.loop)
    this.update()
    this.render()
  }

  update() {
    sceneManager.getCurScene().update()
  }

  render() {
    const curScene = sceneManager.getCurScene()
    curScene.render()
    this.renderer.render(curScene, this.mainCamera)
  }

  clear() {
    // clean animation
    if (this.runningLoop) {
      cancelAnimationFrame(this.runningLoop)
    }

    // clear scene
    const curScene = sceneManager.getCurScene()
    if (curScene) {
      curScene.clear()
    }

    // clean canvas
    if (this.canvasDom.childNodes[0]) {
      this.canvasDom.removeChild(this.canvasDom.childNodes[0])
    }
  }
}


export default Game
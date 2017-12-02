import * as THREE from 'three'
import SceneManager from './SceneManager';
import ObjectManager from './ObjectManager';


class Game {
  constructor(opts = {}) {
    const { canvasDom, width, height } = opts

    this.curScene = null
    this.runningLoop = null
    this.canvasDom = canvasDom
    this.width = width
    this.height = height
    this.devicePixelRatio = window.devicePixelRatio || 1
    this.bgColor = 0xDDDDDD

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.gammaInput = true
    this.renderer.gammaOutput = true
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(this.bgColor, 1)

    // utils
    this.clock = new THREE.Clock()
    this.objects = new ObjectManager()
    this.sceneManager = new SceneManager()
    this.textureLoader = new THREE.TextureLoader()

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
    this.sceneManager.getAll().forEach((scene) => {
      scene.init()
    })
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
    this.curScene.update()
  }

  render() {
    this.curScene.render()
    this.renderer.render(this.curScene.scene, this.mainCamera)
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
import * as THREE from 'three'
import objectManager from './managers/objectManager'
import sceneManager from './managers/sceneManager'


class Game {
  constructor(opts = {}) {
    const { canvasDom } = opts
    // meta
    this.runningLoop = null
    this.canvasDom = canvasDom
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
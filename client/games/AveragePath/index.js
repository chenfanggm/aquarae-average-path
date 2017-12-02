import * as THREE from 'three'
import Game from '../../commons/Game'
import MainScene from './scenes/MainScene'


class AveragePath extends Game {

  init() {
    // meta
    this.width = window.innerWidth/1.2
    this.height = window.innerHeight/1.2
    this.devicePixelRatio = window.devicePixelRatio || 1
    this.bgColor = 0xDDDDDD
    this.renderer.setSize(this.width, this.height)
    this.renderer.setClearColor(this.bgColor, 1)


    // scene
    const mainScene = new MainScene()
    this.sceneManager.add('mainScene', mainScene)
    this.setCurScene(mainScene)
    super.init()
  }
}

export default AveragePath
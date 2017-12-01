import Game from '../../commons/Game'
import MainScene from './scenes/MainScene'


class AveragePath extends Game {

  init() {
    // setup initial scene
    const mainScene = new MainScene({ game: this })
    this.sceneManager.add('mainScene', mainScene)
    this.setCurScene(mainScene)

    // start game life cycle
    super.init()
  }
}

export default AveragePath
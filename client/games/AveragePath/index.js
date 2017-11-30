import Game from '../../commons/Game'
import MainScene from './scenes/MainScene'


class AveragePath extends Game {

  init() {
    // setup current scene
    const mainScene = new MainScene({ game: this })
    this.sceneService.add('mainScene', mainScene)
    this.setCurScene(mainScene)

    // start game life cycle
    super.init()
  }
}

export default AveragePath
import Game from '../../commons/Game'
import MainScene from './scenes/MainScene'
import sceneManager from '../../commons/sceneManager'


class AveragePath extends Game {
  init() {
    sceneManager.setCurScene(new MainScene('mainScene'))
    super.init()
  }
}

export default AveragePath
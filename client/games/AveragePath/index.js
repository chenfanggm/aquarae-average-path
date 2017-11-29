import Game from '../../commons/Game'
import MainScene from './MainScene'


class AveragePath extends Game {
  constructor(props) {
    super({ bgColor: 0xDDDDDD, ...props })
  }

  init() {
    const mainScene = new MainScene({ game: this })
    this.sceneService.add('mainScene', mainScene)
    this.setCurScene(mainScene)
    super.init()
  }
}

export default AveragePath
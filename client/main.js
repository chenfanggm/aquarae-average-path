import './styles/main.scss'
import './normalize'
import config from '../config'
import Detector from './libs/Detector'
import AveragePath from './games/AveragePath'

// global debug flag
window.__DEBUG__ = true

// setup game
const canvasDom = document.getElementById('mainCanvas')
let game = null
if (Detector.webgl) {
  game = new AveragePath({ canvasDom })
  game.start()
} else {
  const warning = Detector.getWebGLErrorMessage()
  document.getElementById('mainCanvas').appendChild(warning)
}


// HMR setting
if (config.env === 'development' && module.hot) {
  module.hot.accept('./main', () => {
    game.reload()
  })
}

window.addEventListener('resize', () => {
  game.reload()
})

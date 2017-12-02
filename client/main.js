import './styles/main.scss'
import './normalize'
import config from '../config'
import Detector from './libs/Detector'
import AveragePath from './games/AveragePath'


const canvasDom = document.getElementById('mainCanvas')

if (Detector.webgl) {
  window.Aquarae = new AveragePath({ canvasDom })
  Aquarae.start()
} else {
  const warning = Detector.getWebGLErrorMessage()
  document.getElementById('mainCanvas').appendChild(warning)
}


// HMR setting
if (config.env === 'development' && module.hot) {
  module.hot.accept('./main', () => {
    Aquarae.reload()
  })
}

window.addEventListener('resize', () => {
  Aquarae.reload()
})

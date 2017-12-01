import './styles/main.scss'
import './normalize'
import config from '../config'
import Detector from './libs/Detector'
import AveragePath from './games/AveragePath'


const canvasDom = document.getElementById('mainCanvas')
const width = window.innerWidth/1.2
const height = window.innerHeight/1.2

if (Detector.webgl) {
  const averagePath = new AveragePath({ canvasDom, width, height })
  averagePath.start()
} else {
  const warning = Detector.getWebGLErrorMessage()
  document.getElementById('mainCanvas').appendChild(warning)
}


// HMR setting
if (config.env === 'development' && module.hot) {
  module.hot.accept('./main', () => {
    averagePath.reload()
  })
}

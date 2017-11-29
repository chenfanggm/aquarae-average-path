import './styles/main.scss'
import './normalize'
import config from '../config'
import AveragePath from './games/AveragePath'


const canvasDom = document.getElementById('mainCanvas')
const width = window.innerWidth/1.2
const height = window.innerHeight/1.2

const averagePath = new AveragePath({ canvasDom, width, height })
averagePath.start()

// Hot module replace setting
if (config.env === 'development' && module.hot) {
  module.hot.accept()
}

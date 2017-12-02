import * as THREE from 'three'
import Game from '../../commons/Game'
import MainScene from './scenes/MainScene'


class AveragePath extends Game {

  init() {
    // camera
    this.cameraFov = 45
    this.cameraAspect = this.width/this.height
    this.cameraNear = 0.1
    this.cameraFar = 4000
    this.mainCamera = new THREE.PerspectiveCamera(this.cameraFov, this.cameraAspect, this.cameraNear, this.cameraFar)
    this.mainCamera.position.set(20, 20, 70)
    this.objects.add('mainCamera', this.mainCamera)

    // scene
    const mainScene = new MainScene()
    this.sceneManager.add('mainScene', mainScene)
    this.setCurScene(mainScene)
    super.init()
  }
}

export default AveragePath
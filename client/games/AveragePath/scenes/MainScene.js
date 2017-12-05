import dat from 'dat-gui'
import * as THREE from 'three'
import '../../../commons/libs/OrbitAndPanControls.new'
import Scene from '../../../commons/Scene'
import Maze from '../objects/Maze'
import AmbientLight from '../objects/AmbientLight'
import DirectionalLight from '../objects/DirectionalLight'
import objectManager from '../../../commons/objectManager'
import stateManager from '../../../commons/stateManager'


class MainScene extends Scene {
  init() {
    // camera
    const mainCamera = objectManager.get('mainCamera')
    mainCamera.position.set(0, 50, 40)
    mainCamera.lookAt(0, 0, 0)
    const renderer = objectManager.get('renderer')
    this.cameraControls = new THREE.OrbitAndPanControls(mainCamera, renderer.domElement)
    this.cameraControls.target.set(0, 0, 5)
    // resources
    const mazeWidth = 50
    const mazeHeight = 50
    this.add(new Maze('maze', { width: mazeWidth, height: mazeHeight }))
    this.add(new AmbientLight('ambientLight', { position: new THREE.Vector3(100, 100, 100) }))
    this.add(new DirectionalLight('directionalLight', {
      position: new THREE.Vector3(100, 100, 100),
      target: objectManager.get('maze')
    }))
    super.init()
  }

  update() {
    const delta = stateManager.getClock().getDelta()
    this.cameraControls.update(delta)
    super.update()
  }

  render() {
    super.render()
  }
}

export default MainScene
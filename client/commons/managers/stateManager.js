import * as THREE from 'three'


class StateManager {
  constructor() {
    this.clock = new THREE.Clock()
  }

  getClock() {
    return this.clock
  }
}

const stateManager = new StateManager()
export default stateManager
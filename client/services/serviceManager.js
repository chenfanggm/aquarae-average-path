import SceneService from './SceneService'
import ObjectService from './ObjectService'


class ServiceManager {
  constructor() {
    this.services = {
      sceneService: new SceneService(),
      objectService: new ObjectService()
    }
  }

  getService(serviceName) {
    if (this.services[serviceName]) return this.services[serviceName]
    else throw new Error(`service ${serviceName} not exist`)
  }
}

const serviceManager = new ServiceManager()
export default serviceManager

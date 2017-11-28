import SceneService from './SceneService'
import ObjectService from './ObjectService'


class ServiceManager {
  constructor() {
    this.availables = {
      sceneService: new SceneService(),
      objectService: new ObjectService()
    }

    this.services = {}
  }

  getService(serviceName) {
    if (this.services[serviceName]) return this.services[serviceName]
    else if (!this.services[serviceName]) throw new Error(`service ${serviceName} not exist`)
    else {
      this.services[serviceName] = this.availables[serviceName].init()
    }
  }
}

const serviceManager = new ServiceManager()
export default serviceManager

class SceneService {
  constructor() {
    this.scenes = {}
  }

  add(id, scene) {
    this.scenes[id] = scene
  }

  get(id) {
    if (this.scenes[id]) return this.scenes[id]
    throw new Error(`not existing scene with id: ${id}`)
  }

  getAll() {
    return Object.values(this.scenes)
  }

  clearAll() {
    this.scenes = {}
  }

}

export default SceneService
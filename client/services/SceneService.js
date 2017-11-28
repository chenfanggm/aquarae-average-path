class SceneService {
  constructor() {
    this.scenes = {}
  }

  getAll() {
    return this.scenes
  }

  getById(id) {
    if (this.scenes[id]) return this.scenes[id]
    throw new Error(`not existing scene with id: ${id}`)
  }

  clearAll() {
    this.scenes = {}
  }

}

export default SceneService
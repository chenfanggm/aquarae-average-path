class ObjectService {
  constructor() {
    this.objs = {}
  }

  getAll() {
    return Object.values(this.objs)
  }

  getById(id) {
    if (this.objs[id]) return this.objs[id]
    throw new Error(`not existing object with id: ${id}`)
  }

}

export default ObjectService
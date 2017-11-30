class ObjectService {
  constructor() {
    this.objs = {}
  }

  add(id, object) {
    if (this.objs[id]) throw new Error(`objectId ${id} already exist`)
    this.objs[id] = object
  }

  get(id) {
    if (this.objs[id]) return this.objs[id]
    throw new Error(`not existing object with id: ${id}`)
  }

  getAll() {
    return Object.values(this.objs)
  }

  clearAll() {
    this.objs = {}
  }
}

export default ObjectService
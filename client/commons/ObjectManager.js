
class ObjectService {
  constructor() {
    this.objs = {}
  }

  add(id, object) {
    if (typeof id !== 'string') {
      object = id
      id = null
    }
    if (id) {
      if (this.objs[id]) throw new Error(`object ${id} already exist`)
      this.objs[id] = object
    } else if (object.name) {
      if (this.objs[object.name]) throw new Error(`object ${object.name} already exist`)
      this.objs[object.name] = object
    } else {
      this.objs[object.uuid] = object
    }
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
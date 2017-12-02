import * as THREE from 'three'
import ObjectManager from './ObjectManager';
import GameObject from './GameObject';


class Scene {
  constructor() {
    this.scene = new THREE.Scene()
    this.objects = new ObjectManager()
  }

  init() {
    this.objects.getAll().forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.init === 'function') {
        obj.init()
      }
    })
  }

  update() {
    this.objects.getAll().forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.update === 'function') {
        obj.update()
      }
    })
  }

  render() {
    this.objects.getAll().forEach((obj) => {
      if (obj instanceof GameObject) {
        if (!obj.hidden) {
          this.scene.add(obj.mesh)
        } else {
          this.scene.remove(obj.mesh)
        }
      } else if (!obj.hidden) {
        this.scene.add(obj)
      } else {
        this.scene.remove(obj)
      }
    })
  }

  add(id, object) {
    this.objects.add(id, object)
    Aquarae.objects.add(id, object)
  }

  remove(id) {
    this.objects.remove(id)
    Aquarae.objects.remove(id)
  }

  clear() {
    // remove scene objects from scene
    if (this.scene.children) {
      this.scene.children.forEach((obj) => {
        this.scene.remove(obj)
      })
    }

    // remove all objects from pool
    this.objects.clearAll()
    Aquarae.objects.clearAll()

    // reset scene
    this.scene = new THREE.Scene()
  }
}

export default Scene

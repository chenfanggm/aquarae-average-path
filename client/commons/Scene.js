import * as THREE from 'three'
import ObjectManager from './ObjectManager';
import GameObject from './GameObject';


class Scene {
  constructor({ game }) {
    this.game = game
    this.scene = new THREE.Scene()
    this.objects = new ObjectManager()
  }

  init() {
    this.objects.getAll().forEach((obj) => {
      if (typeof obj.init === 'function') {
        obj.init()
      }
    })
  }

  render() {
    this.objects.getAll().forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.render === 'function') {
        obj.render(this.scene)
      }
    })
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
    // reset scene
    this.scene = new THREE.Scene()
  }
}

export default Scene

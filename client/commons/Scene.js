import * as THREE from 'three'
import $ from 'jquery'


class Scene {
  constructor({ game }) {
    this.game = game
    this.scene = new THREE.Scene()
  }

  init() {
    throw new Error('scene have to implement an init function')
  }

  render() {
    throw new Error('scene have to implement a render function')
  }

  clear() {
    // remove scene objects from scene
    if (this.scene.children) {
      this.scene.children.forEach((obj) => {
        this.scene.remove(obj)
      })
    }
    // remove all object in pool from scene
    const objects = this.game.objectService.getAll()
    objects.forEach((obj) => {
      this.scene.remove(obj)
    })

    // clear object pool
    this.game.objectService.clearAll()

    // clean GUI
    $('.dg.ac').empty()

    // reset scene
    this.scene = new THREE.Scene()
  }
}

export default Scene

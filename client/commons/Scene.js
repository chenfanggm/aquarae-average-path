import * as THREE from 'three'
import helper from '../utils/helper'
import GameObject from './GameObject'
import sceneManager from './managers/sceneManager'
import objectManager from './managers/objectManager'


class Scene extends THREE.Scene {
  constructor(id) {
    super()
    this.name = id || ''
    sceneManager.add(id || this.id, this)
  }

  init() {
    objectManager.getAll().forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.init === 'function') {
        obj.init()
      }
    })
    if (__DEBUG__) {
      this.setupHelper()
    }
  }

  update() {
    objectManager.getAll().forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.update === 'function') {
        obj.update()
      }
    })
  }

  render() {
    objectManager.getAll().forEach((obj) => {
      if (obj instanceof GameObject && typeof obj.render === 'function') {
        obj.render(this)
      }
    })
  }

  clear() {
    // remove objects from scene
    if (this.children) {
      this.children.forEach((obj) => {
        this.remove(obj)
      })
    }
    // remove objects from pool
    objectManager.clearAll()
  }

  setupHelper() {
    helper.renderOriginIndicator(this)
  }
}

export default Scene

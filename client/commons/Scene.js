import * as THREE from 'three'


class Scene {
  constructor({ game }) {
    this.game = game
    this.scene = new THREE.Scene()
  }

  clear() {
    if (this.scene.children) {
      this.scene.children.forEach((obj) => {
        this.scene.remove(obj)
      })
    }
    const objects = this.game.objectService.getAll()
    objects.forEach((obj) => {
      this.scene.remove(obj)
    })
    this.game.objectService.clearAll()
  }
}

export default Scene

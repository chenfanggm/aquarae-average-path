import * as THREE from 'three'
import sceneManager from '../commons/managers/sceneManager'


const material = new THREE.MeshBasicMaterial({
  color: 0xf44542,
  opacity: 1,
  transparent: false
})
const ORINGIN_INDICATOR = new THREE.Mesh(new THREE.SphereGeometry(0.5, 100, 100), material )


export const renderOriginIndicator = () => {
  sceneManager.getCurScene().add(ORINGIN_INDICATOR)
}

export default {
  renderOriginIndicator
}
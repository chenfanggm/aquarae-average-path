import * as THREE from 'three'


const loadingManager = new THREE.LoadingManager()
const textureLoader = new THREE.TextureLoader(loadingManager)

const textures = {}


loadingManager.load = (filePath) => {
  if (textures[filePath]) {
    return textures[filePath]
  }

  const texture = textureLoader.load(filePath)
  textures[filePath] = texture
  return texture
}

loadingManager.onStart = function (url, itemsLoaded, itemsTotal ) {
  console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' )
}

loadingManager.onLoad = function ( ) {
  console.log( 'Loading complete!')
}


loadingManager.onProgress = function (url, itemsLoaded, itemsTotal ) {
  console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' )
}

loadingManager.onError = function (url ) {
  console.log( 'There was an error loading ' + url )
}

export default loadingManager
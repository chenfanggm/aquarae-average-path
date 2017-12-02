
export const create2DArray = (width, height, initValue) => {
  const twoDArray = []
  const tiles = []
  for (let row = 0; row < height; row++) {
    const rowArray = []
    for (let col = 0; col < width; col++) {
      if (typeof initValue !== 'undefined') {
        if (typeof initValue === 'function') {
          const tile = new initValue(row, col)
          rowArray.push()
          tiles.push()
        } else {
          rowArray.push(initValue)
        }
      } else {
        rowArray.push(null)
      }
    }
    twoDArray.push(rowArray)
  }

  return twoDArray
}
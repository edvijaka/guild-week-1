function flatten(arrays) {
  return arrays.reduce((flat, current) => {
    return flat.concat(current)
  }, [])
}

console.log('flatten([[1], [2], [4]]);: ', flatten([[1], [2,3], [4]]));
// [ 1, 2, 3, 4 ]
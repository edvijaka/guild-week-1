function reverseArray(array) {
  const arrayLength = array.length;
  let reversedArray = [];

  for (i = 0; i < arrayLength; i += 1) {
    const oppositeIndex = Math.abs(i - (arrayLength - 1));
    reversedArray.push(array[oppositeIndex]);
  }

  return reversedArray;
}

console.log('reverseArray([1, 2, 3, 4, 5]): ', reverseArray([1, 2, 3, 4, 5]));
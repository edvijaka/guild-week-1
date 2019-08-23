function arrayToList(array) {
  let list = null;
  for(i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

console.log('arrayToList: ', arrayToList([1,2,3]));

function listToArray(list) {
  let array = [];
  for (node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

console.log('listToArray: ', listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));

function prepend(value, list) {
  return {value, rest: list}
}

console.log('prepend: ', JSON.stringify(prepend(4, arrayToList([1,2,3]))));

function nth(list, position) {
  let newList = [];
  for (node = list; node; node = node.rest) {
    newList.push(node)
  }

  return newList[position];
}

console.log('nth: ', nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 2));

function recursiveNth(list, n) {
  if (n === 0) {
    return list.value
  } else {
    return recursiveNth(list.rest, n-1);
  }
}

console.log('recursiveNth: ', recursiveNth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 2));



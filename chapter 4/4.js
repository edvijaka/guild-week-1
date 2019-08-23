function deepEqual(a, b) {
  if (a == null || b == null || !typeof a === 'object' || !typeof b === 'object') {
    return false
  }

  const aKeys =Object.keys(a);
  for(i = 0; i < aKeys.length; i++) {
    if(!!b[aKeys[i]] && a[aKeys[i]] === b[aKeys[i]]){
      return true
    }
    return false;
  }
}

console.log('deepEqual: ', deepEqual({a: 1}, {a: 1})); //true
console.log('deepEqual: ', deepEqual({a: 1}, {a: 2})); //false
console.log('deepEqual: ', deepEqual({a: 1}, {b: 1})); //false
console.log('deepEqual: ', deepEqual({a: 1}, null)); //false
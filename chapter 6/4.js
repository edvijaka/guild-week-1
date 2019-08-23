const tmp = {a: 1, hasOwnProperty: 1};
const tmp2 = {a: 1};

console.log(Object.prototype.hasOwnProperty.call(tmp, 'a'));

console.log(tmp.hasOwnProperty('a')); // this will break
console.log(tmp2.hasOwnProperty('a')); // this will work

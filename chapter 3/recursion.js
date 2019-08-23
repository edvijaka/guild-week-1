function isNumberEven(number) {
  function isEven(el) {
    if (el % 2 === 0) {
      return true;
    } else if (el % 2 === 1) {
      return false;
    } else {
      isEven(el)
    }
  }

  return isEven(number)
}

console.log('isNumberEven(50): ', isNumberEven(50)); // true
console.log('isNumberEven(50): ', isNumberEven(75)); // false
// console.log('isNumberEven(50): ', isNumberEven(-1)); // this should crash


// my way without recursion

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

console.log('isEven(50);: ', isEven(50)); // true
console.log('isEven(75);: ', isEven(75)); // false
console.log('isEven(-1);: ', isEven(-1)); // true
console.log('isEven(-2);: ', isEven(-2)); // false
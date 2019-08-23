function every(array, test) {
  for(i = 0; i < array.length; i++) {
    if (!test(array[i])) {return false}
  }
  return true;
}

every([1, 30, 39, 29, 10, 13], (el) => el < 40); //true
every([1, 30, 39, 41], (el) => el < 40); //false

function everyWithSome(array, test) {
  return !array.some((el) => !test(el));
}

everyWithSome([1, 30, 39, 29, 10, 13], (el) => el < 40); //true
everyWithSome([1, 30, 39, 41], (el) => el < 40); //false
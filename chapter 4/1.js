function sum(start, end, step = 1) {
  if (step === 0) {
    return 0;
  }
  let customArray = [];
  const limit = (i) => step > 0 ? i <= end : i >= end;
  
  for (i = start; limit(i); i += step) {
    customArray.push(i);
  }

  let acc = 0;
  for(i = 0; i < customArray.length; i++) {  
    acc = acc + customArray[i];
  }

  return acc;
}

console.log('sum(1, 4);: ', sum(1, 10));
console.log('sum(1, 4);: ', sum(1, 10, 2));
console.log('sum(1, 4);: ', sum(5, 2, -1));
console.log('sum(1, 4);: ', sum(5, 2, 0));
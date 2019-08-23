function countBs(word) {
  let BsCount = 0;
  for(letter in word) {
    if (word[letter] === 'B') {
      BsCount ++;
    }
  };
  return BsCount;
}

console.log('countBs("cardiB"): ', countBs('cardiB'));
console.log('countBs("hello"): ', countBs('hello'));

// -------- second part --------

function countChar(word, char) {
  let BsCount = 0;
  for(letter in word) {
    if (word[letter] === char) {
      BsCount ++;
    }
  };
  return BsCount;
}

console.log('countChar("cardiB", "r"): ', countChar('cardiB', 'r'));
console.log('countChar("hello", "l"): ', countChar('hello', 'l'));
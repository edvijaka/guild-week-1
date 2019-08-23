class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(otherVec) {
    return new Vec(this.x + otherVec.x, this.y + otherVec.y);
  }

  minus(otherVec) {
    return new Vec(this.x - otherVec.x, this.y - otherVec.y);
  }

  getLength() {
    const sumOfSquares = Math.pow(this.x, 2) + Math.pow(this.y, 2)
    return Math.sqrt(sumOfSquares)
  }
}

console.log(new Vec(2, 2).plus(new Vec(2,2))); //Vec { x: 4, y: 4 }
console.log(new Vec(2, 2).minus(new Vec(1,1))); //Vec { x: 1, y: 1 }
console.log(new Vec(3, 4).getLength()); //5
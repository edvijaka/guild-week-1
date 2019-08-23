class PGroup {
  constructor(group) {
    this.group = group;
  }

  add(instance) {
    if(this.group.indexOf(instance) === -1) {
      return new PGroup([...this.group, instance]);
    }
    return this;
  }

  delete(instance) {
    const index = this.group.indexOf(instance);
    if(index !== -1) {
      return new PGroup(this.group.filter(el => el !== instance));
    }
    return this;
  }

  has(instance) {
    if(this.group.indexOf(instance) === -1) {
      return false;
    }
    return true;
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
class Group {
  constructor() {
    this.group = [];
  }

  add(instance) {
    if(this.group.indexOf(instance) === -1) {
      this.group = [...this.group, instance];
      return true;
    }
    return false;
  }

  delete(instance) {
    const index = this.group.indexOf(instance);
    if(index !== -1) {
      this.group = this.group.filter(el => el !== instance);
      return true;
    }
    return false;
  }

  static from(array) {
    const group =  new Group();
    array.forEach(el => group.add(el));
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.group);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if(this.position === this.group.length) {
      return {done: true};
    }

    this.position++;
    return {value: this.group[this.position], done: false}
  }
}

for (let value of Group.from(['Ed', 'Shed'])) {
  console.log(value);
}

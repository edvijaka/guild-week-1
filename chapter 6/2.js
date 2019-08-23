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
}

const coolGroup = new Group();
console.log(coolGroup.add('Bed')); //true
console.log(coolGroup.add('Ed')); //true
console.log(coolGroup.add('Ed')); //false
console.log(coolGroup.delete('Ed')); //true
console.log(Group.from(['Ed', 'Shed'])); //true
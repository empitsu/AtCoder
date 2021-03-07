class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value <= this.data) {
      if (this.left === null) {
        this.left = new Node(value);
      } else {
        this.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new Node(value);
      } else {
        this.insert(value);
      }
    }
  }
  includes(value) {
    if (value === this.data) return true;
    if (value <= this.data) {
      if (this.left === null) {
        return false;
      } else {
        this.left.includes(value);
      }
    } else {
      if (this.right === null) return false;
      this.right.includes(value);
    }
  }
  printInOrder() {
    if (this.left !== null) {
      this.left.printInOrder();
    }
    console.log(this.data);
    if (this.right !== null) {
      this.right.printInOrder();
    }
  }
}

class BinarySearchTree {
  constructor() {}

  search() {}
}

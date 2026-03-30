import { Node } from "./Node.js";

export class LinkedList {
  constructor(value) {
    this.headNode = new Node(value);
  }

  append(value) {
    let pointer = this.headNode;
    while (pointer.nextNode != null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = new Node(value);
    return this.headNode;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    if (this.headNode === null) {
      return 0;
    } else {
      let pointer = this.headNode;
      while (pointer !== null) {
        pointer = pointer.nextNode;
        count++;
      }
    }
    return count;
  }

  head() {
    if (this.headNode === false) {
      return undefined;
    } else {
      return this.headNode;
    }
  }

  tail() {
    if (this.headNode === false) {
      return undefined;
    }
    let pointer = this.head();
    while (pointer.next !== null) {
      pointer = pointer.nextNode;
    }
    return pointer;
  }

  at(index) {
    let count = 1;
    let pointer = head;
    while (pointer !== null) {
      if (count == index) {
        return pointer.value;
      }
      pointer = pointer.nextNode;
      count++;
    }
    return undefined;
  }

  toString() {
    let string = "";
    let pointer = this.headNode;
    while (pointer !== null) {
      string += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    string += `${pointer}`;
    return string;
  }

  pop() {
    if (!this.headNode) {
      return undefined;
    } else {
      const val = this.headNode.value;
      this.headNode = this.headNode.nextNode;
      return val;
    }
  }

  contains(value) {
    let pointer = this.headNode;
    while (pointer !== null) {
      if (pointer.value === value) {
        return true;
      }
    }
    return false;
  }

  findIndex(value) {
    let index = 0;
    let pointer = this.headNode;
    while (pointer !== null) {
      if (pointer.value === value) {
        return index;
      }
      index++;
    }
    return -1;
  }
}

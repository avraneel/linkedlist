import { Node } from "./Node";

class LinkedList {
  constructor(value) {
    this.headNode = new Node(value);
  }

  append(value) {
    let pointer = this.headNode;
    while (pointer.next != null) {
      pointer = pointer.next;
    }
    pointer.next = new Node(value);
    return this.headNode;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.headNode;
    return newNode;
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
}

/**
 * refer to:
 * https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
 */

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  insertNodeToTheEnd(data) {
    const newNode = new SinglyLinkedListNode(data);
    let currentNode = this.head;
    if (currentNode === null) {
      this.head = newNode;
      return;
    }
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return newNode;
  }
  insertNodeToTheHead(data) {
    const newNode = new SinglyLinkedListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    return newNode;
  }
}

function hasCycle(head) {
  if (head === null) return false;
  let fastSearch = head.next;
  let slowSearch = head;
  while (
    fastSearch !== null &&
    fastSearch.next !== null &&
    slowSearch !== null
  ) {
    if (fastSearch === slowSearch) return true;
    slowSearch = slowSearch.next; // + 1
    fastSearch = fastSearch.next.next; // + 2
  }
  return false;
}

// create a linked list that has a cycle
const linkedList = new SinglyLinkedList();
linkedList.insertNodeToTheEnd(1);
const node2 = linkedList.insertNodeToTheEnd(2);
const node3 = linkedList.insertNodeToTheEnd(3);
node3.next = node2;

console.log(hasCycle(linkedList.head)); // expect: true

// create a linked list that has no cycle

const linkedList2 = new SinglyLinkedList();
linkedList2.insertNodeToTheEnd(1);
linkedList2.insertNodeToTheEnd(2);
linkedList2.insertNodeToTheEnd(3);

console.log(hasCycle(linkedList2.head)); // expect: false

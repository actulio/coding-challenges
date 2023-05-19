// This is an input class. Do not edit.
export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node: Node) {
    // Write your code here.
    if (!this.head) this.head = node;
    else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  setTail(node: Node) {
    // Write your code here.
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    // Write your code here.
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    // Write your code here.
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    // Write your code here.
  }

  removeNodesWithValue(value: number) {
    // Write your code here.
  }

  remove(node: Node) {
    // Write your code here.
  }

  containsNodeWithValue(value: number) {
    // Write your code here.
    return false;
  }
}

const doublyLinkedList = new DoublyLinkedList();

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node3_2 = new Node(3);
const node3_3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

doublyLinkedList.setHead(node5);
doublyLinkedList.setHead(node4);
// doublyLinkedList.setHead(node3);
// doublyLinkedList.setHead(node2);
// doublyLinkedList.setHead(node1);
// // doublyLinkedList.setHead(node4);
doublyLinkedList.setTail(node6);
// // doublyLinkedList.insertBefore(node6, node3);
// doublyLinkedList.insertAfter(node6, node3_2);
// doublyLinkedList.insertAtPosition(1, node3_3);
// doublyLinkedList.removeNodesWithValue(3);
// doublyLinkedList.remove(node2);
// doublyLinkedList.containsNodeWithValue(5);

console.log(doublyLinkedList);

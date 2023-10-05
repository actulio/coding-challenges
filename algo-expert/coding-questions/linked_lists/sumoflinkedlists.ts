import { createLinkedList } from '../utils/createLinkedList';

// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
  // Write your code here.
  let sum = linkedListOne.value + linkedListTwo.value;
  let overflow = sum - 10 >= 0;
  let head = new LinkedList(sum % 10);
  let newNodePointer = head;

  let node1: LinkedList | null = linkedListOne.next;
  let node2: LinkedList | null = linkedListTwo.next;

  while (node1 || node2) {
    sum = 0;
    if (node1) {
      sum = node1.value;
      node1 = node1.next;
    }
    if (node2) {
      sum += node2.value;
      node2 = node2.next;
    }
    sum = overflow ? sum + 1 : sum;
    overflow = sum - 10 >= 0;
    newNodePointer.next = new LinkedList(sum % 10);

    newNodePointer = newNodePointer.next;
  }
  if (overflow) newNodePointer.next = new LinkedList(sum % 10);

  return head;
}

const NODES1 = [{ id: '2', next: null, value: 2 }];

const NODES2 = [{ id: '9', next: null, value: 9 }];

const list1 = createLinkedList('2', NODES1);
const list2 = createLinkedList('9', NODES2);
const result = sumOfLinkedLists(list1!, list2!);
// console.log(result);

let point: any = result;

while (point) {
  console.log(point.value);
  point = point.next;
}

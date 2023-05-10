import { LinkedList, createLinkedList } from '../utils/createLinkedList';

const NODES = [
  {"id": "1", "next": "2", "value": 1},
  {"id": "2", "next": "3", "value": 2},
  {"id": "3", "next": "4", "value": 3},
  {"id": "4", "next": null, "value": 4}
];

export function middleNode(linkedList: LinkedList) {
  // Write your code here.
  let slowPointer: LinkedList | null = linkedList;
  let fastPointer: LinkedList | null = linkedList;

  if (slowPointer.next === null) return slowPointer;

  while (fastPointer !== null && fastPointer.next !== null) {
    console.log(slowPointer?.value, fastPointer.value);
    slowPointer = slowPointer ? slowPointer.next : null;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}

const list = createLinkedList('1', NODES);
const result = middleNode(list!);
console.log(result);

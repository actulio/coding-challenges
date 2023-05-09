import { LinkedList, createLinkedList } from '../utils/createLinkedList';

const NODES = [
  { id: '1', next: '1-2', value: 1 },
  { id: '1-2', next: '1-3', value: 1 },
  { id: '1-3', next: '2', value: 1 },
  { id: '2', next: '3', value: 3 },
  { id: '3', next: '3-2', value: 4 },
  { id: '3-2', next: '3-3', value: 4 },
  { id: '3-3', next: '4', value: 4 },
  { id: '4', next: '5', value: 5 },
  { id: '5', next: '5-2', value: 6 },
  { id: '5-2', next: null, value: 6 },
];

const list = createLinkedList('1', NODES);

export function removeDuplicatesFromLinkedList(linkedList: LinkedList | null) {
  // Write your code here.
  let currentNode = linkedList;
  if (!currentNode) return linkedList;

  while (currentNode !== null) {
    let next = currentNode.next as LinkedList | null;
    while (next && next.value === currentNode.value) {
      next = next.next;
    }
    currentNode.next = next;
    currentNode = next;
  }

  return linkedList;
}

console.log(JSON.stringify(list));
const result = removeDuplicatesFromLinkedList(list);
console.log(JSON.stringify(result));

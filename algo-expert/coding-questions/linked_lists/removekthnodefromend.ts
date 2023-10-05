import { createLinkedList } from '../utils/createLinkedList';
import { LinkedList } from './sumoflinkedlists';

export function removeKthNodeFromEnd2(head: LinkedList, k: number) {
  // Write your code here.
  let pointer: LinkedList | null = head;
  let node: LinkedList | null = head;
  let counter = 0;

  while (pointer.next) {
    if (node && counter >= k) {
      node = node.next;
    }
    counter++;
    console.log(counter);
    pointer = pointer.next;
  }
  console.log(node);

  if (node) {
    const temp = node.next;
    if (node === head && temp) {
      node.value = temp!.value;
      node.next = temp.next;
    } else {
      node.next = temp?.next || null;
    }
  }
  return head;
}

export function removeKthNodeFromEnd(head: LinkedList, k: number) {
  // Write your code here.
  let node: LinkedList | null = head;
  let endPointer: LinkedList | null = head;
  let counter = 1;

  while (counter <= k) {
    endPointer = endPointer?.next || null;
    counter++;
  }

  if (!endPointer) {
    node.value = head.next?.value || 0;
    node.next = head.next?.next || null;
    return head;
  }

  while (endPointer.next) {
    node = node?.next || null;
    endPointer = endPointer.next || null;
  }

  if (node) {
    node.next = node.next?.next || null;
  }
  return head;
}

const NODES = [
  { id: '0', next: '1', value: 0 },
  { id: '1', next: '2', value: 1 },
  { id: '2', next: '3', value: 2 },
  { id: '3', next: '4', value: 3 },
  { id: '4', next: '5', value: 4 },
  { id: '5', next: '6', value: 5 },
  { id: '6', next: '7', value: 6 },
  { id: '7', next: '8', value: 7 },
  { id: '8', next: '9', value: 8 },
  { id: '9', next: null, value: 9 },
];

const list = createLinkedList('0', NODES);
const result = removeKthNodeFromEnd(list!, 9);
console.log(result);

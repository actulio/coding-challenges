import {
  createLinkedList,
  LinkedList,
  printLinkedList,
} from '../../algo-expert/coding-questions/utils/createLinkedList';

function mergeTwoLists(list1: LinkedList | null, list2: LinkedList | null): LinkedList | null {
  let head: LinkedList | null = new LinkedList(0);
  let pointer: LinkedList | null = head;
  let p1 = list1;
  let p2 = list2;

  while (p1 && p2) {
    printLinkedList(p1);
    console.log('-');
    printLinkedList(p2);
    if (p1.value <= p2.value) {
      pointer.next = p1;
      p1 = p1.next;
    } else {
      pointer.next = p2;
      p2 = p2.next;
    }
    pointer = pointer?.next
    console.log('\n');
  }
  if (p1) {
    pointer.next = p1;
  } else {
    pointer.next = p2;
  }

  printLinkedList(head);
  return head.next;
}

function mergeTwoLists2(list1: any, list2: any) {
  const dummy = { val: 0, next: null };
  let node = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }
    node = node.next!;
  }

  if (list1) {
    node.next = list1;
  } else {
    node.next = list2;
  }

  return dummy.next;
}

const NODES1 = [
  { id: '1', next: '2', value: 1 },
  { id: '2', next: '4', value: 2 },
  { id: '4', next: null, value: 4 },
];

const NODES2 = [
  { id: '1', next: '3', value: 1 },
  { id: '3', next: '4', value: 3 },
  { id: '4', next: null, value: 4 },
];
const list1 = createLinkedList('1', NODES1);
const list2 = createLinkedList('1', NODES2);

printLinkedList(mergeTwoLists(list1, list2));

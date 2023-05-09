import { BinaryTree as BST, createTree } from '../utils/createBinaryTree';

export function findClosestValueInBst(tree: BST, target: number) {
  // Write your code here.
  let pointer: BST | null = tree;
  let closest = tree.value;

  while (pointer !== null) {
    closest =
      Math.abs(target - pointer.value) <= Math.abs(target - closest) ? pointer.value : closest;
    if (pointer.value === target) return pointer.value;
    if (target > pointer.value) {
      pointer = pointer.right;
    } else {
      pointer = pointer.left;
    }
  }
  return closest;
}

const NODES = [
  { id: '10', left: '5', right: '15', value: 10 },
  { id: '15', left: '13', right: '22', value: 15 },
  { id: '22', left: null, right: null, value: 22 },
  { id: '13', left: null, right: '14', value: 13 },
  { id: '14', left: null, right: null, value: 14 },
  { id: '5', left: '2', right: '6', value: 5 },
  { id: '6', left: null, right: null, value: 5 },
  { id: '2', left: '1', right: null, value: 2 },
  { id: '1', left: null, right: null, value: 1 },
];

const tree = createTree('10', NODES);
const result = findClosestValueInBst(tree!, 12);
console.log(result);

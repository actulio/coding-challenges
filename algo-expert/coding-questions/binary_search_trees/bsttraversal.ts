import { createTree, BinaryTree as BST } from '../utils/createBinaryTree';

export function inOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (!tree) return;
  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);

  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (!tree) return;
  array.push(tree.value);
  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  // Write your code here.
  if (!tree) return;
  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);
  return array;
}

const NODES = [
  { id: '10', left: '5', right: '15', value: 10 },
  { id: '15', left: null, right: '22', value: 15 },
  { id: '22', left: null, right: null, value: 22 },
  { id: '5', left: '2', right: '5-2', value: 5 },
  { id: '5-2', left: null, right: null, value: 5 },
  { id: '2', left: '1', right: null, value: 2 },
  { id: '1', left: null, right: null, value: 1 },
];
const tree = createTree('10', NODES);
const result1 = inOrderTraverse(tree, []);
const result2 = preOrderTraverse(tree, []);
const result3 = postOrderTraverse(tree, []);

console.log(result1, result2, result3);

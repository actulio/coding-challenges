import { BinaryTree, createTree } from '../utils/createBinaryTree';

export function nodeDepths(root: BinaryTree, sum: number[] = [0], depth = 0) {
  // Write your code here.
  sum[0] = sum[0] + depth;
  console.log('value', root.value, 'sum', sum, 'depth', depth);

  if (root.left) nodeDepths(root.left, sum, depth + 1);
  if (root.right) nodeDepths(root.right, sum, depth + 1);
  return sum[0];
}

export function nodeDepths2(root: BinaryTree, depth = 0) {
  // Write your code here.
  let sum = 0;
  if (root.left) sum += nodeDepths2(root.left, depth + 1);
  if (root.right) sum += nodeDepths2(root.right, depth + 1);

  return depth + sum;
}

const NODES = [
  { id: '1', left: '2', right: '3', value: 1 },
  { id: '2', left: '4', right: '5', value: 2 },
  { id: '3', left: '6', right: '7', value: 3 },
  { id: '4', left: '8', right: '9', value: 4 },
  { id: '5', left: null, right: null, value: 5 },
  { id: '6', left: null, right: null, value: 6 },
  { id: '7', left: null, right: null, value: 7 },
  { id: '8', left: null, right: null, value: 8 },
  { id: '9', left: null, right: null, value: 9 },
];

const tree = createTree('1', NODES);
const result = nodeDepths2(tree!);
console.log(result);

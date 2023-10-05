import { BinaryTree, createTree } from '../utils/createBinaryTree';

export function invertBinaryTree(tree: BinaryTree | null) {
  // Write your code here.
  let node = tree;
  const queue: BinaryTree[] = [node!];

  while (queue.length) {
    const current = queue.shift();
    if (!current) break;

    const left = current.left;
    const right = current.right;

    left && queue.push(left);
    right && queue.push(right);

    current.left = right;
    current.right = left;
  }
  return tree;
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
const result = invertBinaryTree(tree!);
console.log(result);

import { BinaryTree, createTree } from '../utils/createBinaryTree';

export function branchSums(root: BinaryTree, sum: number = 0, output: number[] = []): number[] {
  // Write your code here.

  if (!root.left && !root.right) {
    output.push(sum + root.value);
  }

  if (root.left) branchSums(root.left, sum + root.value, output);
  if (root.right) branchSums(root.right, sum + root.value, output);

  return output;
}

const NODES = [
  { id: '1', left: '2', right: '3', value: 1 },
  { id: '2', left: '4', right: '5', value: 2 },
  { id: '3', left: '6', right: '7', value: 3 },
  { id: '4', left: '8', right: '9', value: 4 },
  { id: '5', left: '10', right: null, value: 5 },
  { id: '6', left: null, right: null, value: 6 },
  { id: '7', left: null, right: null, value: 7 },
  { id: '8', left: null, right: null, value: 8 },
  { id: '9', left: null, right: null, value: 9 },
  { id: '10', left: null, right: null, value: 10 },
];

const tree = createTree('1', NODES);
const result = branchSums(tree!);
console.log(result);

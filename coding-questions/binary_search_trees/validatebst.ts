import { createTree, BinaryTree as BST } from '../utils/createBinaryTree';

export function validateBst(tree: BST | null): boolean {
  // Write your code here.

  const validateHelper = (tree: BST | null, min = -Infinity, max = Infinity): boolean => {
    if (!tree) return true;

    console.log(tree.value, min, max);
    if (tree.value < min || tree.value >= max) return false;

    return (
      validateHelper(tree.left, min, tree.value) && validateHelper(tree.right, tree.value, max)
    );
  };

  return validateHelper(tree);
}

const NODES = [
  { id: '10', left: '5', right: '15', value: 10 },
  { id: '15', left: '13', right: '22', value: 15 },
  { id: '22', left: null, right: null, value: 22 },
  { id: '13', left: null, right: '14', value: 13 },
  { id: '14', left: null, right: null, value: 14 },
  { id: '5', left: '2', right: '5-2', value: 5 },
  { id: '5-2', left: null, right: null, value: 5 },
  { id: '2', left: '1', right: null, value: 2 },
  { id: '1', left: null, right: null, value: 1 },
];

const tree = createTree('10', NODES);
const result = validateBst(tree!);
console.log(result);

import { BinaryTree as BST, createTree } from '../utils/createBinaryTree';

export function findKthLargestValueInBst(tree: BST, k: number) {
  // Write your code here.
  let kthLargest = tree;
  let counter = 0;

  const reverseInOrder = (node: BST | null) => {
    if (!node) return;

    reverseInOrder(node.right);

    if (counter === k) return;
    kthLargest = node;
    counter++;

    reverseInOrder(node.left);
  };

  reverseInOrder(tree);
  return kthLargest ? kthLargest.value : null;
}

const NODES = [
  { id: '15', left: '5', right: '20', value: 15 },
  { id: '20', left: '17', right: '22', value: 20 },
  { id: '22', left: null, right: null, value: 22 },
  { id: '17', left: null, right: null, value: 17 },
  { id: '5', left: '2', right: '5-2', value: 5 },
  { id: '5-2', left: null, right: null, value: 5 },
  { id: '2', left: '1', right: '3', value: 2 },
  { id: '3', left: null, right: null, value: 3 },
  { id: '1', left: null, right: null, value: 1 },
];

const tree = createTree('15', NODES);
const result = findKthLargestValueInBst(tree!, 5);
console.log(result);

const reverseInOrderTraversal = (tree: BST | null) => {
  if (!tree) return;

  reverseInOrderTraversal(tree.right);
  console.log(tree.value);
  reverseInOrderTraversal(tree.left);
};

const inOrderTraversal = (tree: BST | null, output: BST[] = []) => {
  if (!tree) return;

  inOrderTraversal(tree.right, output);
  output.push(tree);
  inOrderTraversal(tree.left, output);
};

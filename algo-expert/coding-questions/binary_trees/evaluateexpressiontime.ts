import { BinaryTree, createTree } from '../utils/createBinaryTree';

type Operators = -1 | -2 | -3 | -4;

function evaluate(op: Operators, left: number, right: number): number {
  if (op === -1) return right + left;
  if (op === -2) return left - right;
  if (op === -3) return Math.trunc(left / right);
  else return left * right;
}

export function evaluateExpressionTree(tree: BinaryTree): number {
  // Write your code here.
  console.log(tree);
  if (!tree.left && !tree.right) return tree.value;

  const leftOperand = evaluateExpressionTree(tree.left!);
  const rightOperand = evaluateExpressionTree(tree.right!);
  const operator = tree.value as Operators;
  // console.log(leftOperand, rightOperand, operator);

  return evaluate(operator, leftOperand, rightOperand);
}

// const NODES = [
//   { id: '1', left: '2', right: '3', value: -1 },
//   { id: '2', left: '4', right: '5', value: -2 },
//   { id: '3', left: '6', right: '7', value: -3 },
//   { id: '4', left: '8', right: '9', value: -4 },
//   { id: '5', left: null, right: null, value: 2 },
//   { id: '6', left: null, right: null, value: 8 },
//   { id: '7', left: null, right: null, value: 3 },
//   { id: '8', left: null, right: null, value: 2 },
//   { id: '9', left: null, right: null, value: 3 },
// ];

const NODES = [
  { id: '1', left: '9', right: '3', value: -3 },
  { id: '9', left: null, right: null, value: 9 },
  { id: '3', left: '4', right: '6', value: -2 },
  { id: '4', left: null, right: null, value: 4 },
  { id: '6', left: null, right: null, value: 6 },
];

const tree = createTree('1', NODES);
const result = evaluateExpressionTree(tree!);
console.log(result);

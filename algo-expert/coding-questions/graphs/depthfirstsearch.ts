import { createGraph, GraphNode } from '../utils/createGraph';

const NODES = [
  { children: ['B', 'C', 'D'], id: 'A', value: 'A' },
  { children: ['E', 'F'], id: 'B', value: 'B' },
  { children: [], id: 'C', value: 'C' },
  { children: ['G', 'H'], id: 'D', value: 'D' },
  { children: [], id: 'E', value: 'E' },
  { children: ['I', 'J'], id: 'F', value: 'F' },
  { children: ['K'], id: 'G', value: 'G' },
  { children: [], id: 'H', value: 'H' },
  { children: [], id: 'I', value: 'I' },
  { children: [], id: 'J', value: 'J' },
  { children: [], id: 'K', value: 'K' },
];
const tree = createGraph('A', NODES);

function saveInOrder(array: string[], node: GraphNode) {
  array.push(node.name);
  for (let child of node.children) {
    saveInOrder(array, child);
  }
}

function depthFirstSearch(array: string[]) {
  saveInOrder(array, tree!);
  return array;
}

const result = depthFirstSearch([]);
console.log(result);

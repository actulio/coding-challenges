// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties

import { GraphNode, createGraph } from '../utils/createGraph';

// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array: string[]) {
    // Write your code here.
    return array;
  }
}

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

const graph = createGraph('A', NODES);

export function breadthFirstSearch(array: string[]) {
  const queue: GraphNode[] = [graph!];

  while (queue.length) {
    const current = queue.shift();
    current && current.children && queue.push(...current.children);
    current && current.children && array.push(current.name);
    console.log(queue);
    // queue.push(pointer)
  }

  return array;
}

const arr: string[] = [];
const result = breadthFirstSearch(arr);
console.log(result);

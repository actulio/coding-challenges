export function minHeightBst(array: number[]) {
  // Write your code here.
  if (array.length === 0) return new BST(-1);

  return constructMinHeightBst(array, 0, array.length - 1, null);
}

function constructMinHeightBst(array: number[], start: number, end: number, bst: BST | null) {
  if (end < start) return;

  const mid = Math.floor((start + end) / 2);
  const value = array[mid];
  if (bst === null) bst = new BST(value);
  else bst.insert(value); // log(n) operation n times
  return bst;
}

function constructMinHeightBst2(array: number[], start: number, end: number) {
  if (end < start) return null;

  const mid = Math.floor((start + end) / 2);
  const value = array[mid];

  const newNode = new BST(value);
  newNode.left = constructMinHeightBst2(array, start, mid - 1);
  newNode.right = constructMinHeightBst2(array, mid + 1, end);
  return newNode;
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

const input = [1, 2, 5, 7, 10, 13, 14, 15, 22];
console.log(minHeightBst(input));

/*
10

1 -> 5
2 -> 2,5 - 7,5 (2, 7)
4 -> 1,25 - 3,25 - 6,25 - 8,75 (1, 3, 6, 8)
6 -> 0,

*/

/*


*/

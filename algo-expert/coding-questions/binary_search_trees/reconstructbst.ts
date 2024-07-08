// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number, left: BST | null = null, right: BST | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  // Write your code here.
  let rootIdx = 0;
  const reconstructBstHelper = (
    lowerBound: number = -Infinity,
    upperBound: number = Infinity
  ): BST | null => {
    const subTreeRootValue = preOrderTraversalValues[rootIdx];
    if (rootIdx >= preOrderTraversalValues.length) return null; //
    if (subTreeRootValue < lowerBound || subTreeRootValue >= upperBound) return null;

    rootIdx++;
    // const newNode = new BST(subTreeRootValue);
    // newNode.left = reconstructBstHelper(lowerBound, subTreeRootValue);
    // newNode.right = reconstructBstHelper(subTreeRootValue, upperBound);
    // return newNode;
    const leftNode = reconstructBstHelper(lowerBound, subTreeRootValue);
    const rightNode = reconstructBstHelper(subTreeRootValue, upperBound);
    return new BST(subTreeRootValue, leftNode, rightNode);
  };

  return reconstructBstHelper();
}

const input = [10, 4, 2, 1, 5, 17, 19, 18];
console.log(reconstructBst(input));

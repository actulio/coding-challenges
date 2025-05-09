// export class BST {
//   value: number;
//   left: BST | null;
//   right: BST | null;

//   constructor(value: number) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(value: number): BST {
//     // Write your code here.
//     let pointer: BST | null = this;
//     while (pointer !== null) {
//       if (value >= pointer.value) {
//         if (pointer.right === null) {
//           pointer.right = new BST(value);
//           break;
//         } else pointer = pointer.right;
//       } else {
//         if (pointer.left === null) {
//           pointer.left = new BST(value);
//           break;
//         } else pointer = pointer.left;
//       }
//     }
//     // Do not edit the return statement of this method.
//     return this;
//   }

//   contains(value: number) {
//     // Write your code here.
//     let pointer: BST | null = this;
//     while (pointer !== null) {
//       if (pointer.value === value) return true;
//       if (value > pointer.value) pointer = pointer.right;
//       else if (value < pointer.value) pointer = pointer.left;
//     }
//     return false;
//   }

//   remove(value: number, parentNode: BST | null = null): BST {
//     // Write your code here.
//     let node: BST | null = this;
//     let parent: BST | null = null;

//     // find node
//     while (node) {
//       if (value < node.value) [parent, node] = [node, node.left];
//       else if (value > node.value) [parent, node] = [node, node.right];
//       else break;
//     }

//     if (node === null) return this;

//     // remove leaf node
//     if (parent !== null && node.left === null && node.right === null) {
//       if (parent.left === node) parent.left = null;
//       else parent.right = null;
//       return this;
//     }
//     // remove node with both left and right children
//     if (node.left !== null && node.right !== null) {
//       // const minValue = this.getMinBranchValue(node.right);
//       const minValue = this.removeMinBranchValue(node, parent!);
//       node.value = minValue;
//       return this;
//     }

//     // remove node with only left child
//     if (node.left !== null && node.right === null) {
//       const temp = node.left;
//       [node.value, node.value, node.value] = [temp.value, temp.value, temp.value];
//       return this;
//     }
//     // remove node with only right child
//     if (node.left === null && node.right !== null) {
//       const temp = node.right;
//       [node.value, node.value, node.value] = [temp.value, temp.value, temp.value];
//       return this;
//     }

//     // Do not edit the return statement of this method.
//     return this;
//   }

//   private getMinBranchValue(node: BST) {
//     let pointer: BST | null = node;
//     let minValue = node.value;
//     while (pointer !== null) {
//       minValue = node.value;
//       pointer = pointer.left ? pointer.left : pointer.right;
//     }
//     return minValue;
//   }

//   private removeMinBranchValue(node: BST, parent: BST) {
//     let nodePointer: BST | null = node;
//     let parentPointer: BST | null = parent;

//     while (nodePointer.left !== null) {
//       parentPointer = nodePointer;
//       nodePointer = nodePointer.left;
//     }
//     if (parentPointer.left === node) parentPointer.left = null;
//     else parentPointer.right = null;
//     return node.value;
//   }
// }

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    let head: BST | null = this;

    while (head !== null) {
      if (value > head.value) {
        if (head.right === null) {
          head.right = new BST(value);
          break;
        } else head = head.right;
      }
      if (value <= head.value) {
        if (head.left === null) {
          head.left = new BST(value);
          break;
        } else head = head.left;
      }
    }

    return this;
  }

  contains(value: number) {
    let head: BST | null = this;

    while (head !== null) {
      if (value === head.value) return true;
      else if (value > head.value) head = head.right;
      else head = head.left;
    }

    return false;
  }

  remove(value: number): BST {
    let head: BST | null = this;
    let parent: BST | null = null;

    while (head !== null) {
      if (value === head.value) break;
      parent = head;
      if (value > head.value) head = head.right;
      else head = head.left;
    }
    if (head === null) return this;

    if (parent === null) {
      // remove root
    }
    // remove node with only right child or right and left children
    else if (head.right) {
    }
    // remove node with only left child
    else if (head.left) {
    }
    // remove leaf node
    else if (!head.left && !head.right) {
      this.removeLeafNode(parent, value);
    }

    console.log(head, parent);

    return this;
  }

  getMinNode() {
    let pointer: BST | null = this;
    while (pointer.left) pointer = pointer.left;
    return pointer;
  }

  removeLeafNode(parent: BST, value: number) {
    if (parent.left && parent.left.value === value) parent.left = null;
    if (parent.right && parent.right.value === value) parent.right = null;
  }

  removeLeftmostNode() {}

  removeRightmostNode() {}

  removeNodeWithChildren(node: BST, parent: BST, value: number) {
    // always gives preference to right nodes
  }
}

const execute = () => {
  const bst: Record<string, any> = new BST(10);

  const calls = [
    {
      arguments: [5],
      method: 'insert',
    },
    {
      arguments: [15],
      method: 'insert',
    },
    {
      arguments: [2],
      method: 'insert',
    },
    {
      arguments: [5],
      method: 'insert',
    },
    {
      arguments: [13],
      method: 'insert',
    },
    {
      arguments: [22],
      method: 'insert',
    },
    {
      arguments: [1],
      method: 'insert',
    },
    {
      arguments: [14],
      method: 'insert',
    },
    {
      arguments: [12],
      method: 'insert',
    },
    {
      arguments: [13],
      method: 'remove',
    },
    {
      arguments: [15],
      method: 'contains',
    },
  ];

  for (let call of calls) {
    const partial = bst[call.method](...call.arguments);
    // console.log(partial);
  }

  console.log(JSON.stringify(bst));
};

execute();

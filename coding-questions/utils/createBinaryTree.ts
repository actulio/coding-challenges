type DescriptionNode = { id: string; left: string | null; right: string | null; value: number };

export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export const createTree = (id: string | null, NODES: DescriptionNode[]) => {
  const nodeOp = NODES.find((node) => node.id === id);
  if (!nodeOp) return null;

  const node = new BinaryTree(nodeOp.value);
  node.left = createTree(nodeOp.left, NODES);
  node.right = createTree(nodeOp.right, NODES);
  return node;
};

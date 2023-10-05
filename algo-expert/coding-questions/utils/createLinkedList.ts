export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

type DescriptionNode = { id: string; next: string | null; value: number };

export const createLinkedList = (id: string | null, NODES: DescriptionNode[]) => {
  const nodeOp = NODES.find((node) => node.id === id);
  if (!nodeOp) return null;

  const node = new LinkedList(nodeOp.value);
  node.next = createLinkedList(nodeOp.next, NODES);
  return node;
};

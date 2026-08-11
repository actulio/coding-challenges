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

export const printLinkedList = (head: LinkedList | null): void => {
  const values: number[] = [];
  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  console.log(values.join(' -> '));
};

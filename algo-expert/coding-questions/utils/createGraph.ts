export class GraphNode {
  name: string;
  children: GraphNode[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new GraphNode(name));
    return this;
  }
}

type DescriptionNode = { id: string; children: string[]; value: string };

export const createGraph = (id: string | null, NODES: DescriptionNode[]) => {
  const nodeOp = NODES.find((node) => node.id === id);
  if (!nodeOp) return null;

  const node = new GraphNode(nodeOp.value);
  for (let child of nodeOp.children) {
    const aux = createGraph(child, NODES);
    if (aux) node.children.push(aux);
  }
  return node;
};

export class UnionFind {
  private parents: Record<number, number>;
  constructor() {
    // Write your code here.
    this.parents = {};
  }

  createSet(value: number) {
    // Write your code here.
    this.parents[value] = value;
    return null;
  }

  find(value: number) {
    // Write your code here.
    if (!this.parents[value]) return null;

    let parent = value;
    while (parent !== this.parents[parent]) {
      parent = this.parents[parent];
    }
    return parent;
  }

  union(valueOne: number, valueTwo: number) {
    // Write your code here.
    if (!this.parents[valueOne] || !this.parents[valueTwo]) return null;

    const parentOne = this.find(valueOne);
    const parentTwo = this.find(valueTwo);

    this.parents[parentTwo!] = parentOne!;

    return null;
  }
}

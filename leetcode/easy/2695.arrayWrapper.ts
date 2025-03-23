export class ArrayWrapper {
  private memory;
  constructor(nums: number[]) {
    this.memory = nums;
  }

  valueOf(): number {
    return this.memory.reduce((acc, curr) => acc + curr, 0);
  }

  toString(): string {
    return `[${this.memory.join(',')}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
//@ts-ignore
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"

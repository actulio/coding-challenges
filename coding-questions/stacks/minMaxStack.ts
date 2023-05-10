// Feel free to add new properties and methods to the class.
type MinMaxMap = { min: number; max: number };

export class MinMaxStack {
  private length: number = 0;
  private stack: number[] = [];
  private minMax: MinMaxMap[] = [];

  peek() {
    // Write your code here.
    return this.length ? this.stack[this.length - 1] : -1;
  }

  pop() {
    // Write your code here.
    this.length--;
    this.minMax.pop();
    return this.stack.pop();
  }

  push(number: number) {
    // Write your code here.
    const currentMinMax = this.length
      ? {
          min: Math.min(this.minMax[this.length - 1].min, number),
          max: Math.max(this.minMax[this.length - 1].max, number),
        }
      : { min: number, max: number };
    this.minMax.push(currentMinMax);
    this.length = this.stack.push(number);
  }

  getMin() {
    // Write your code here.
    return this.length ? this.minMax[this.length - 1].min : -1;
  }

  getMax() {
    // Write your code here.
    return this.length ? this.minMax[this.length - 1].max : -1;
  }
}

const calls = [
  {
    arguments: [5],
    method: 'push',
  },
  {
    arguments: [],
    method: 'getMin',
  },
  {
    arguments: [],
    method: 'getMax',
  },
  {
    arguments: [],
    method: 'peek',
  },
  {
    arguments: [7],
    method: 'push',
  },
  {
    arguments: [],
    method: 'getMin',
  },
  {
    arguments: [],
    method: 'getMax',
  },
  {
    arguments: [],
    method: 'peek',
  },
  {
    arguments: [2],
    method: 'push',
  },
  {
    arguments: [],
    method: 'getMin',
  },
  {
    arguments: [],
    method: 'getMax',
  },
  {
    arguments: [],
    method: 'peek',
  },
  {
    arguments: [],
    method: 'pop',
  },
  {
    arguments: [],
    method: 'pop',
  },
  {
    arguments: [],
    method: 'getMin',
  },
  {
    arguments: [],
    method: 'getMax',
  },
  {
    arguments: [],
    method: 'peek',
  },
];

const minMaxStack: Record<string, any> = new MinMaxStack();

for (let call of calls) {
  const partial = minMaxStack[call.method](...call.arguments);
  console.log(partial);
}

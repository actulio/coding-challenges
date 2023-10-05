export function taskAssignment(k: number, tasks: number[]) {
  // Write your code here.
  const indexes: Record<number, number[]> = [];
  const output = [];
  const len = tasks.length;

  for (let i = 0; i < len; i++) {
    const val = tasks[i];
    if (indexes[val]) indexes[val].push(i);
    else indexes[val] = [i];
  }
  tasks.sort((a, b) => a - b);

  for (let i = 0; i < len / 2; i++) {
    const smaller = indexes[tasks[i]].pop();
    const bigger = indexes[tasks[len - i - 1]].pop();
    output.push([smaller, bigger]);
  }
  return output;
}

const tasks = [5, 6, 2, 3, 15, 15, 16, 19, 2, 10, 10, 3, 3, 32, 12, 1, 23, 32, 9, 2];
const result = taskAssignment(10, tasks);
console.log(result);

export function sortStack(stack: number[]) {
  // Write your code here.
  if (stack.length === 0) return stack;

  const top = stack.pop()!;
  console.log(top);
  sortStack(stack);

  insert(stack, top);

  console.log(top, stack);

  return stack;
}

const insert = (stack: number[], value: number) => {
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }
  const top = stack.pop()!;
  insert(stack, value);
  stack.push(top);
};

const INPUT: number[] = [3, 1, 0, 2];
const result = sortStack(INPUT);
console.log(result);

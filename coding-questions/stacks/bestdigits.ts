export function bestDigits(number: string, numDigits: number) {
  // Write your code here.
  const stack: string[] = [];
  let removalsLeft = numDigits;

  for (let i = 0; i < number.length; i++) {
    while (stack.length > 0 && removalsLeft > 0 && number[i] > stack[stack.length - 1]) {
      stack.pop();
      removalsLeft--;
    }
    stack.push(number[i]);
  }

  while (removalsLeft > 0) {
    stack.pop();
    removalsLeft--;
  }

  return stack.join('');
}

const INPUT = '1020304050';

const result = bestDigits(INPUT, 5);
console.log(result);

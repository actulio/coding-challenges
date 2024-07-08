export function reversePolishNotation(tokens: string[]): number {
  const stack: number[] = [];
  const operations: Record<string, (a: number, b: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  };

  for (let token of tokens) {
    if (token in operations) {
      const right = stack.pop()!;
      const left = stack.pop()!;
      console.log(left, token, right);
      stack.push(operations[token](left, right));
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack.pop()!;
}

const input = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
console.log(reversePolishNotation(input));


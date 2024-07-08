export function validParentheses(string: string): boolean {
  const stack: string[] = [];
  const openBrackets = ['(', '[', '{'];
  const closeBrackets: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let current of string) {
    if (openBrackets.includes(current)) {
      stack.push(current);
    } else {
      const top = stack.pop();
      if (top === undefined || closeBrackets[current] !== top) return false;
    }
  }
  return stack.length === 0;
}

const input = '(())';
// const input = '()[]{}';

console.log(validParentheses(input));

function validParentheses(s: string): boolean {
  const stack = [];
  const open = '([{';
  const close = ')]}';

  for (let c of s) {
    if (open.includes(c)) {
      stack.push(c);
    } else if (stack.length >= 0) {
      const top = stack.pop();
      const idx = close.indexOf(c);
      if (top !== open[idx]) return false;
    } else return false;
  }

  return !stack.length;
}

const input = '([{}])';
console.log(validParentheses(input));

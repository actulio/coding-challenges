export function balancedBrackets(string: string) {
  // Write your code here.
  const stack: string[] = [];
  const opening = '({[';
  const closing = ')}]';
  const matching: Record<string, string> = { ')': '(', '}': '{', ']': '[' };

  for (let elem of string) {
    if (opening.includes(elem)) {
      stack.push(elem);
      continue;
    }
    if (!closing.includes(elem)) continue;
    const popped = stack.pop() as string;
    if (matching[elem] === popped) continue;

    return false;
  }

  return stack.length > 0 ? false : true;
}

const INPUT = '{}gawgw()';
const result = balancedBrackets(INPUT);
console.log(result);

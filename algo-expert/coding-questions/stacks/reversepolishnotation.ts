export function reversePolishNotation(tokens: string[]) {
  const stack: string[] = [];
  for (let token of tokens) {
    if (isOperator(token)) {
      const right = stack.pop();
      const left = stack.pop();

      const res = operate(parseInt(left!), parseInt(right!), token);
      stack.push(res.toString());
      console.log(`${left} ${token} ${right} = ${res.toString()}`);
    } else {
      stack.push(token);
    }
  }
  // Write your code here.
  return stack[0];
}

const isOperator = (token: string) => {
  switch (token) {
    case '+':
    case '-':
    case '*':
    case '/':
      return true;
  }
  return false;
};

const operate = (left: number, right: number, operator: string) => {
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return Math.trunc(left / right);
    default:
      return 1;
  }
};

const INPUT = ['50', '3', '17', '+', '2', '-', '/'];
const result = reversePolishNotation(INPUT);
console.log(result);

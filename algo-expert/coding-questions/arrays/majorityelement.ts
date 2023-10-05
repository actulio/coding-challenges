export function majorityElement(input: number[]) {
  let answer = input[0];
  let count = 1;

  for (let i = 1; i < input.length; i++) {
    if (answer === input[i]) count++;
    else count--;
    if (count === 0) answer = input[i + 1];
  }
  return answer;
}

export function majorityElementBit(input: number[]) {}

const INPUT = [1, 2, 3, 2, 3, 2, 2, 4, 2];
// const INPUT = [1, 2, 3, 2, 2, 1, 2];
const result = majorityElement(INPUT);
console.log(result);

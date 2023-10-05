export function minimumWaitingTime(queries: number[]) {
  // Write your code here.
  queries.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 1; i < queries.length; i++) {
    sum += queries[i - 1] * (queries.length - i);
  }

  return sum;
}

const QUERIES = [3, 2, 1, 2, 6];
const result = minimumWaitingTime(QUERIES);
console.log(result);

// 1 -> 0
// 2 -> 1
// 2 -> 1 + 2
// 3 -> 1 + 2 + 2
// 6 -> 1 + 2 + 2 + 3

// 0 + 1*4 + 2*3 + 2*2 + 3

// [25, 30, 2, 1]

// 1 -> 0
// 2 -> 1
// 25-> 1 + 2
// 30-> 1 + 2 + 25

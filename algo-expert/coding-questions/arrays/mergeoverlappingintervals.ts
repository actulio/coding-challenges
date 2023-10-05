export function mergeOverlappingIntervals(array: number[][]) {
  // Write your code here.
  array.sort((a, b) => a[0] - b[0]);
  const output = [];

  let i = 1;
  let currentInterval = array[0];
  output.push(currentInterval);
  for (let nextInterval of array) {
    const [, currentEnd] = currentInterval;
    const [nextStart, nextEnd] = nextInterval;
    if (currentEnd >= nextStart) {
      currentInterval[1] = Math.max(currentEnd, nextEnd);
    } else {
      currentInterval = nextInterval;
      output.push(currentInterval);
    }
  }
  return output;
}

const INPUT = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];
const result = mergeOverlappingIntervals(INPUT);
console.log(result);

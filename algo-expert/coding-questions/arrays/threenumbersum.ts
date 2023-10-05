type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  // Write your code here.
  array.sort((a, b) => a - b);
  const triplets: Triplet[] = [];
  const length = array.length;
  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        const currentSum = array[i] + array[j] + array[k];
        if (currentSum === targetSum) triplets.push([array[i], array[j], array[k]]);
      }
    }
  }
  return triplets;
}

export function threeNumberSum2(array: number[], targetSum: number): Triplet[] {
  // Write your code here.
  array.sort((a, b) => a - b);
  const triplets: Triplet[] = [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let fromNext = i + 1;
    let fromLast = length - 1;
    while (fromNext < fromLast) {
      const currentSum = array[i] + array[fromNext] + array[fromLast];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[fromNext], array[fromLast]]);
        fromNext++;
      }
      if (currentSum < targetSum) fromNext++;
      else fromLast--;
    }
  }
  return triplets;
}

const ARRAY = [12, 3, 1, 2, -6, 5, -8, 6];
const result = threeNumberSum2(ARRAY, 0);
console.log(result);

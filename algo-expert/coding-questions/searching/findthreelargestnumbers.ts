// const ARRAY = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
const ARRAY = [55, 7, 8];

export function findThreeLargestNumbers(array: number[]) {
  // Write your code here.
  let largest = [-Infinity, -Infinity, -Infinity];
  for (let curr of array) {
    console.log(largest);
    largest = updateLargest(largest, curr) || largest;
  }
  return largest;
}

function updateLargest(largest: number[], current: number) {
  if (current > largest[2]) {
    largest.splice(3, 0, current);
    return largest.slice(1, 4);
  }
  if (current > largest[1]) {
    largest.splice(2, 0, current);
    return largest.slice(1, 4);
  }
  if (current > largest[0]) {
    largest.splice(1, 0, current);
    return largest.slice(1, 4);
  }
}

const result = findThreeLargestNumbers(ARRAY);
console.log(result);

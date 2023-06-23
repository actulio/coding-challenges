// type direction = 'equal' | 'up' | 'down';
type direction = 0 | 1 | -1;

export function isMonotonic(array: number[]) {
  // Write your code here.
  if (array.length <= 1) return true;

  let previousDirection: direction = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let currentDirection: direction = previousDirection;
    if (array[i] > array[i + 1]) currentDirection = 1;
    if (array[i] < array[i + 1]) currentDirection = -1;

    if (previousDirection && previousDirection !== currentDirection) return false;
    previousDirection = currentDirection;
  }

  return true;
}

export function isMonotonic2(array: number[]) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) isNonIncreasing = false;
    if (array[i] < array[i + 1]) isNonDecreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
}

const ARRAY = [-1, -5, -10, -1100, -900, -1101, -1102, -9001];
// const ARRAY = [-1, -5, -10, -1100, -900, -1101, -1102, -9001];
const result = isMonotonic(ARRAY);
console.log(result);

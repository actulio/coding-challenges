const ARRAY = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
// const ARRAY = [1, 5, 23, 111];

export function binarySearch(array: number[], target: number): number {
  // Write your code here.
  let l = 0;
  let r = array.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    console.log(`l=${l}, r=${r}, m=${m}, array[m]=${array[m]}`);
    if (array[m] === target) return m;
    if (array[m] < target) l = m + 1;
    if (array[m] > target) r = m - 1;
  }

  return -1;
}

function binarySearchRecursive(array: number[], target: number) {
  return binarySearchRecursiveHelper(array, target, 0, array.length - 1);
}

function binarySearchRecursiveHelper(
  array: number[],
  target: number,
  left: number,
  right: number
): number {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const value = array[middle];
  if (target === value) return middle;
  else if (target < value) return binarySearchRecursiveHelper(array, target, left, middle - 1);
  else return binarySearchRecursiveHelper(array, target, middle + 1, right);
}

const result = binarySearch(ARRAY, 33);
console.log(result);

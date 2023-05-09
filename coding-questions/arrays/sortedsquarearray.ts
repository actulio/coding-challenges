const ARRAY = [-3, -2, -1, 1, 2, 3, 5, 6, 8, 9];
// const ARRAY = [1];

export function sortedSquaredArray(array: number[]) {
  // Write your code here.
  let smaller = 0;
  let bigger = array.length - 1;
  const res = [];

  while (bigger >= smaller) {
    const smallerSquared = Math.pow(array[smaller], 2);
    const biggerSquared = Math.pow(array[bigger], 2);
    if (biggerSquared > smallerSquared) {
      res.unshift(biggerSquared);
      bigger--;
    } else {
      res.unshift(smallerSquared);
      smaller++;
    }
  }
  return res;
}

const result = sortedSquaredArray(ARRAY);

console.log(result);

export function threeNumberSort(array: number[], order: number[]) {
  // Write your code here.
  const bucket = [0, 0, 0];

  for (let val of array) {
    if (val === order[0]) bucket[0]++;
    if (val === order[1]) bucket[1]++;
    if (val === order[2]) bucket[2]++;
  }

  let idx = 0;
  for (let i = 0; i < bucket.length; i++) {
    const frequency = bucket[i];

    for (let k = 1; k <= frequency; k++) {
      array[idx] = order[i];
      idx += 1;
    }
  }

  return array;
}

export function threeNumberSort2(array: number[], order: number[]) {
  // Write your code here.

  const swap = (arr: number[], firstIdx: number, secondIdx: number) => {
    const temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;
  };

  let first = 0;
  let second = 0;
  let third = array.length - 1;

  while (third >= second) {
    if (array[second] === order[0]) {
      swap(array, first, second);
      second++;
      first++;
    } else if (array[second] === order[1]) {
      second++;
    } else {
      swap(array, third, second);
      third--;
    }
  }

  return array;
}

const INPUT = [1, 0, 0, -1, -1, 0, 1, 1];
const ORDER = [0, 1, -1];
const result = threeNumberSort2(INPUT, ORDER);
console.log(result);

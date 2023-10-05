export function firstDuplicateValue(array: number[]) {
  // Write your code here.
  const set = new Set();
  for (let elem of array) {
    if (set.has(elem)) return elem;
    else set.add(elem);
  }
  return -1;
}

export function firstDuplicateValue2(array: number[]) {
  // Write your code here.
  for (let elem of array) {
    const index = Math.abs(elem);
    // since the array is [1...n] we can map the values to indexes
    // say, if we find a value "4", we go to index (4 - 1) and "mark" that index
    // to say that the value of the index already happened in the array.
    if (array[index - 1] < 0) return Math.abs(elem);
    array[index - 1] = array[index - 1] * -1;
  }
  return -1;
}

const ARRAY = [2, 1, 5, 2, 3, 3, 4];
const result = firstDuplicateValue2(ARRAY);
console.log(result);

export function insertionSort(array: number[]) {
  // Write your code here.
  // go forward and sweep the array backwards swiping the current element for the previous if lesser
  for (let fwdPointer = 0; fwdPointer < array.length; fwdPointer++) {
    for (let i = fwdPointer; i > 0; i--) {
      const curr = array[i];
      console.log(curr, array[i-1])
      if (curr < array[i - 1]) {
        array[i] = array[i - 1];
        array[i - 1] = curr;
      }
    }
  }

  return array;
}

// const ARRAY = [8, 5, 2, 9, 5, 6, 3];
const ARRAY = [3,2,4];
const result = insertionSort(ARRAY);
console.log(result);

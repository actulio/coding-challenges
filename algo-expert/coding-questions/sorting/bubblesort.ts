export function bubbleSort(array: number[]) {
  // Write your code here.
  // sweep the array changing the current element for the next if bigger, then keep doing until no change is made
  let hasSwapped = false;
  do {
    hasSwapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        hasSwapped = true;
      }
    }
  } while (hasSwapped);

  return array;
}

const ARRAY = [8, 5, 2, 9, 5, 6, 3];
const result = bubbleSort(ARRAY);
console.log(result);

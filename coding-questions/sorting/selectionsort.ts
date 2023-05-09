export function selectionSort(array: number[]) {
  // Write your code here.
  // get the current smallest and add it to the beginning
  for (let i = 0; i < array.length; i++) {
    let smallest = i;
    for (let j = i; j < array.length; j++) {
      if (array[smallest] > array[j]) smallest = j;
    }
    const curr = array[i];
    array[i] = array[smallest];
    array[smallest] = curr;
  }
  return array;
}

const ARRAY = [8, 5, 2, 9, 5, 6, 3];
const result = selectionSort(ARRAY);
console.log(result);

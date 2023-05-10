export function moveElementToEnd(array: number[], toMove: number) {
  // Write your code here.
  let endPointer = array.length - 1;
  let currentPointer = 0;

  while (currentPointer < endPointer) {
    const current = array[currentPointer];

    if (current === toMove) {
      const temp = array[endPointer];
      array[endPointer] = current;
      array[currentPointer] = temp;
      endPointer--;
    } else {
      currentPointer++;
    }
  }

  return array;
}

export function moveElementToEnd2(array: number[], toMove: number) {
  // Write your code here.
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while (array[j] === toMove && j > i) {
      j--;
    }
    if (array[i] === toMove) {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    i++;
  }

  return array;
}

const ARRAY = [2, 1, 2, 2, 2, 3, 4, 2];
const result = moveElementToEnd2(ARRAY, 2);
console.log(result);

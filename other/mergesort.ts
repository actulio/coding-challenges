const merge = (left: number[], right: number[]): number[] => {
  const result = [] as number[];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }
  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const input = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(input));

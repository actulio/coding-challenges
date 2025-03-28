const swap = (arr: number[], left: number, right: number) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const partition = (arr: number[], low: number, high: number) => {
  const pivot = arr[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, high);
  return i;
};

const quicksort = (arr: number[], low: number, high: number) => {
  if (low >= high) return;
  const pivot = partition(arr, low, high);
  quicksort(arr, low, pivot - 1);
  quicksort(arr, pivot + 1, high);
};


const input = [38, 27, 43, 3, 9, 82, 10];
console.log(quicksort(input, 0, input.length - 1))
console.log(input)
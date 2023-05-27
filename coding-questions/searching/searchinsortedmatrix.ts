type Range = [number, number];

export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  // Write your code here.
  const width = matrix[0].length;
  const height = matrix.length;

  let i = 0;
  let j = width - 1;
  while (i < height && j < width && i >= 0 && j >= 0) {
    const val = matrix[i][j];
    console.log(val);
    if (val === target) return [i, j];
    else if (val > target) j--;
    else i++;
  }

  return [-1, -1];
}

const INPUT = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
];
const result = searchInSortedMatrix(INPUT, 44);
console.log(result);

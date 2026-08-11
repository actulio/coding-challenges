function searchMatrix(matrix: number[][], target: number): boolean {
  let xLen = matrix[0].length - 1;
  let yLen = matrix.length - 1;

  let top = 0;
  let bottom = yLen;
  let rowIdx = -1;

  while (top <= bottom) {
    const middle = top + Math.floor((bottom - top) / 2);
    if (target > matrix[middle][xLen]) top = middle + 1;
    else if (target < matrix[middle][0]) bottom = middle - 1;
    else {
      rowIdx = middle;
      break;
    }
  }

  if (target < matrix[0][0] || target > matrix[yLen][xLen] || rowIdx < 0) return false;

  let left = 0;
  let right = xLen;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    const currentEl = matrix[rowIdx][middle];
    if (target < currentEl) right = middle - 1;
    else if (target > currentEl) left = middle + 1;
    else return true;
  }

  return false;
}

// const matrix = [
//     [1, 2, 4, 8],
//     [10, 11, 12, 13],
//     [14, 20, 30, 40],
//   ],
//   target = 10;

const matrix = [[1], [3]],
  target = 2;
console.log(searchMatrix(matrix, target));

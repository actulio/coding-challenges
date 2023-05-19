export function spiralTraverse(array: number[][]) {
  // Write your code here.
  const output = [];

  const width = array[0].length;
  const height = array.length;

  let startingRow = 0;
  let startingColumn = 0;
  let endingRow = height - 1;
  let endingColumn = width - 1;

  while (startingRow <= endingRow && startingColumn <= endingColumn) {
    for (let i = startingColumn; i <= endingColumn; i++) {
      output.push(array[startingRow][i]);
      // forwards
    }
    console.log(output);
    for (let i = startingRow + 1; i <= endingRow; i++) {
      output.push(array[i][endingColumn]);
    }
    console.log(output);
    for (let i = endingColumn - 1; i >= startingColumn; i--) {
      if (endingRow <= startingRow) break;
      output.push(array[endingRow][i]);
    }
    console.log(output);

    for (let i = endingRow - 1; i > startingRow; i--) {
      if (endingColumn <= startingColumn) break;
      output.push(array[i][startingRow]);
    }
    console.log(output);

    console.log('-');
    startingRow++;
    startingColumn++;
    endingColumn--;
    endingRow--;
  }

  return [-1];
}

const INPUT = [
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6],
];

const result = spiralTraverse(INPUT);
console.log(result);

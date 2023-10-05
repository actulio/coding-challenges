const INPUT = [
  [-7, -7],
  [100, 12],
  [-33, 17],
];

export function transposeMatrix(arr: number[][]) {
  const length = arr.length;
  const width = arr[0].length;

  const output: number[][] = [];
  for (let j = 0; j < width; j++) {
    const temp = [];
    for (let i = 0; i < length; i++) {
      temp.push(arr[i][j]);
    }
    console.log(temp);
    output.push(temp);
  }
  return output;
}

const result = transposeMatrix(INPUT);
console.log(result);

const input = [3, 5, -4, 8, 11, 1, -1, 6];
const output = [-1, 11];

function twoNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // @ts-ignore
      process.stdout.write(`[${array[i]}, ${array[j]}] `);
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
    console.log('');
  }

  return [];
}

function twoNumberSum2(array: number[], targetSum: number) {
  // Write your code here.
  const hash = new Set();
  for (let x of array) {
    // targetSum = x + y
    const y = targetSum - x;
    if (y === x) continue;
    if (hash.has(y)) return [x, y];
    else hash.add(x);
  }
  return [];
}

const result = twoNumberSum2(input, 10);

console.log('Actual output: ', result);
console.log('Expected output: ', output);

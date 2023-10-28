export function twoSum(numbers: number[], target: number): number[] {
  let fwd = 0;
  let bwd = numbers.length - 1;

  while (fwd < bwd) {
    const sum = numbers[fwd] + numbers[bwd];
    if (sum === target) return [fwd + 1, bwd + 1];
    if (sum < target) fwd++;
    else bwd--;
  }

  return [];
}

const numbers = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(numbers, target));

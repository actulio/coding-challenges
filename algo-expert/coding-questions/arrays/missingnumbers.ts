export function missingNumbers(nums: number[]) {
  // Write your code here.
  const set = new Set(nums);
  const output = [];
  for (let i = 1; i <= nums.length + 2; i++) {
    if (!set.has(i)) output.push(i);
  }

  return output;
}

const INPUT = [2];
const result = missingNumbers(INPUT);
console.log(result);

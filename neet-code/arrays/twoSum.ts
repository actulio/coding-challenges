export function twoSum(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b);
  let fwb = 0;
  let bwd = nums.length - 1;

  while (fwb < bwd) {
    const sum = nums[fwb] + nums[bwd];
    if (sum > target) bwd--;
    else if (sum < target) fwb++;
    else return [nums[fwb], nums[bwd]];
  }

  return [];
}

function twoSumIndex(array: number[], targetSum: number) {
  // Write your code here.
  const numbersMap = new Map<number, number>();
  for (let i = 0; i < array.length; i++) {
    const x = array[i];
    // targetSum = x + y
    const y = target - x;
    if (numbersMap.has(y)) return [numbersMap.get(y), i];
    numbersMap.set(x, i);
  }
  return [];
}
const nums = [3, 3];
// const nums = [2, 7, 11, 15];
// const target = 9;
const target = 6;
const result = twoSumIndex(nums, target);
console.log(result);

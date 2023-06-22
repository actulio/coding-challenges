export function zeroSumSubarray(nums: number[]) {
  // Write your code here.

  if (nums.length === 0) return false;
  const set = new Set<number>();
  let sum = 0;
  for (let num of nums) {
    sum += num;
    if (set.has(sum)) return true;
    else set.add(sum);
  }

  return sum === 0 ? true : false;
}

const INPUT = [-2, -3, -1, 2, 3, 4, -5, -3, 1, 2];
// const INPUT: number[] = [0];
const result = zeroSumSubarray(INPUT);
console.log(result);

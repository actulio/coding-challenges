export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const output = [];
  console.log(nums);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      const left = nums[leftPointer];
      const right = nums[rightPointer];
      const current = nums[i];
      const sum = current + left + right;

      if (sum === 0) {
        output.push([current, left, right]);
        leftPointer++;
        while (nums[leftPointer] === nums[leftPointer - 1] && leftPointer < rightPointer) {
          leftPointer++;
        }
      } else if (sum < 0) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }
  return output;
}

const input = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(input));

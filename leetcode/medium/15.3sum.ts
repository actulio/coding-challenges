function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      const left = nums[leftPointer];
      const right = nums[rightPointer];
      const current = nums[i];
      const sum = left + right + current;

      if (sum === 0) {
        res.push([left, current, right]);
        leftPointer++;
        rightPointer--;
        while (leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer - 1]) {
          leftPointer++;
        }
        continue;
      }
      if (sum < 0) leftPointer++;
      else rightPointer--;
    }
  }

  return res;
}

// const input = [1, 1, 0, 0, 0, 0];
const input = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(input));

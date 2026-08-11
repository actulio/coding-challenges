function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2);

    if (target < nums[middle]) right = middle - 1;
    else if (target > nums[middle]) left = middle + 1;
    else return middle
  }

  return -1;
}

// console.log(start, middle, end, ":", nums[start], nums[middle], nums[end])

const nums = [-1, 0, 2, 4, 6, 8],
  target = 0;
console.log(search(nums, target));

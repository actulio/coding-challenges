function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const elem = map.get(nums[i]);
    if (elem !== undefined && Math.abs(elem - i) <= k) return true;
    else map.set(nums[i], i);
  }
  return false;
}

const input = [1, 2, 3, 1];
console.log(containsNearbyDuplicate(input, 3));

function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    else set.add(num);
  }
  return false;
}

const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

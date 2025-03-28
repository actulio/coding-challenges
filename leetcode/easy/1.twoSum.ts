function twoSum(nums: number[], target: number): number[] {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    // target = x + y
    // y = target - x
    const y = target - x;
    console.log(`${y} = ${target} - ${x}`)
    if (hash.has(x)) return [hash.get(x), i];
    else hash.set(y, i);
  }
  return [];
}

const input = [3, 3];
const target = 6;
console.log(twoSum(input, target));

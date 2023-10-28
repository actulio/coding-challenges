export function topKFrequent(nums: number[], k: number): number[] {
  const hash: Record<number, number> = {};
  nums.forEach((n) => (hash[n] = (hash[n] || 0) + 1));
  console.log(hash);
  return [];
}

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k));

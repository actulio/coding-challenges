export function topKFrequent(nums: number[], k: number): number[] {
  const hash: Record<number, number> = {};
  nums.forEach((n) => (hash[n] = (hash[n] || 0) + 1));

  const array = Object.entries(hash);
  for (let fwdPointer = 0; fwdPointer < array.length; fwdPointer++) {
    for (let i = fwdPointer; i > 0; i--) {
      const curr = array[i];
      console.log(curr, curr[1], array[i - 1][1]);
      if (curr[1] > array[i - 1][1]) {
        array[i] = array[i - 1];
        array[i - 1] = curr;
      }
    }
  }

  return array.slice(0, k).map((e) => parseInt(e[0]));
}

export function topKFrequent2(nums: number[], k: number): number[] {
  const hash: Record<number, number> = {};
  nums.forEach((n) => (hash[n] = (hash[n] || 0) + 1));

  const entries = Object.entries(hash);
  const invertedBucket: number[][] = new Array(nums.length);
  console.log(invertedBucket)

  for (let i = 0; i < entries.length; i++) {
    const number = parseInt(entries[i][0]);
    const occurrences = entries[i][1];

    if (invertedBucket[occurrences]) invertedBucket[occurrences].push(number);
    else invertedBucket[occurrences] = [number];
  }

  const result: number[] = [];
  let idx = nums.length;
  let counter = 0;
  while (counter < k && idx >= 0) {
    if (invertedBucket[idx]) {
      result.push(...invertedBucket[idx]);
      counter += invertedBucket[idx].length;
    }
    idx--;
  }

  return result;
}

// const nums = [1, 1, 1, 2, 2, 3, 3, 3, 3];
const nums = [1];
const k = 1;
console.log(topKFrequent2(nums, k));

export function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;

  for (const el of nums) {
    if (set.has(el + 1)) continue;
    let currentLongest = 1;
    let currentEl = el;
    // not beginning of sequence
    while (set.has(--currentEl)) currentLongest++;
    longest = Math.max(longest, currentLongest);
  }

  return longest;
}

const input = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// const input = [100, 4, 200, 1, 3, 2];
console.log('Result: ', longestConsecutive(input));

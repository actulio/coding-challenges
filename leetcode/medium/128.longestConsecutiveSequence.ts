function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);

  let biggestLength = 0;

  for (let elem of set) {
    if (set.has(elem - 1)) continue;

    let currentLength = 1;
    while (set.has(elem + currentLength)) currentLength++;

    biggestLength = Math.max(biggestLength, currentLength);
  }

  return biggestLength;
}

const input = [2, 20, 4, 10, 3, 4, 5];
console.log(longestConsecutive(input));

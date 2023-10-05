export function firstNonRepeatingCharacter(string: string) {
  // Write your code here.
  const hash: Record<string, { count: number; idx: number }> = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (hash[char]) hash[char].count++;
    else hash[char] = { count: 1, idx: i };
  }

  for (let elem of Object.values(hash)) {
    if (elem.count === 1) return elem.idx;
  }

  return -1;
}

const STRING = 'abcdcaf';
const result = firstNonRepeatingCharacter(STRING);
console.log(result);

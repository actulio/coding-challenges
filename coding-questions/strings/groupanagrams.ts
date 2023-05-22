export function groupAnagrams(words: string[]) {
  // Write your code here.
  const hash: Record<string, string[]> = {};
  for (let word of words) {
    const sorted = word.split('').sort().join('');
    if (hash[sorted]) hash[sorted].push(word);
    else hash[sorted] = [word];
  }

  return Object.values(hash);
}

const INPUT = ['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp'];
const result = groupAnagrams(INPUT);
console.log(result);

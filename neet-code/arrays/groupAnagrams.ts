export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    const found = map.get(sorted);
    if (found) map.set(sorted, [...found, str]);
    else map.set(sorted, [str]);
  }
  return [...map.values()];
}

const strings = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const result = groupAnagrams(strings);
console.log(result);

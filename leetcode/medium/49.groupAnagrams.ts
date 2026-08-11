function groupAnagrams(strs: string[]): string[][] {
  const hash: Record<string, string[]> = {};
  for (let str of strs) {
    const freq: number[] = new Array(26).fill(0);
    for (let s of str) {
      const ascii: number = s.charCodeAt(0) - 97;
      freq[ascii] = freq[ascii] + 1;
    }
    const key = freq.join('.');
    if (key in hash) hash[key].push(str);
    else hash[key] = [str];
  }
  return Object.values(hash);
}

// const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const input = ['bdddddddddd', 'bbbbbbbbbbc'];
console.log(groupAnagrams(input));

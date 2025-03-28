function isAnagram(s: string, t: string): boolean {
  const buckets = new Map();
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) continue;

    const sCount = buckets.get(s[i]);
    const tCount = buckets.get(t[i]);

    buckets.set(s[i], sCount === undefined ? 1 : sCount + 1);
    buckets.set(t[i], tCount === undefined ? -1 : tCount - 1);
  }

  for (const [_, value] of buckets) {
    if (value !== 0) return false;
  }

  return true;
}

const input1 = 'anagram';
const input2 = 'nagaram';
console.log(isAnagram(input1, input2));

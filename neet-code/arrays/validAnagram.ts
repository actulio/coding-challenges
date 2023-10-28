export function isAnagram(s: string, t: string): boolean {
  const map = new Map<string, number>();
  s.split('').forEach((c) => {
    map.set(c, (map.get(c) || 0) + 1);
  });
  for (let c of t.split('')) {
    const val = map.get(c);
    if (!val) return false;
    map.set(c, val - 1);
  }
  return [...map.values()].every((v) => v === 0);
}

export function isAnagram2(s: string, t: string): boolean {
  const sSorted = s.split('').sort().join('');
  const tSorted = t.split('').sort().join('');
  if (sSorted !== tSorted) return false;
  return true;
}

const s = 'anagrama';
const t = 'nagarama';
const result = isAnagram2(s, t);
console.log(result);

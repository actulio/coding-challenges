export function commonCharacters(strings: string[]) {
  // Write your code here.

  // we can find the smaller string with O(n) if needed
  strings.sort((a, b) => a.length - b.length);
  const common: string[] = [];

  for (let char of strings[0]) {
    console.log(char, '--');
    if (common.includes(char)) continue;
    let isCommon = true;

    for (let i = 1; i < strings.length; i++) {
      console.log(strings[i], strings[i].includes(char));
      if (!strings[i].includes(char)) {
        isCommon = false;
        break;
      }
    }
    if (isCommon) common.push(char);
  }

  return common;
}

export function commonCharacters2(strings: string[]) {
  // Write your code here.

  const map: Record<string, number> = {};

  for (let string of strings) {
    const set = new Set<string>();
    for (let char of string) set.add(char);
    set.forEach((char) => (map[char] = map[char] ? map[char] + 1 : 1));
  }

  const length = strings.length;
  const common: string[] = [];
  Object.keys(map).forEach((key) => {
    if (map[key] === length) common.push(key);
  });

  return common;
}

const STRINGS = ['abc', 'bcd', 'cbad'];
const result = commonCharacters2(STRINGS);
console.log(result);

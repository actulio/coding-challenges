export function minimumCharactersForWords(words: string[]) {
  // Write your code here.
  const hash: Record<string, number> = {};

  for (const word of words) {
    const frequencyHash: Record<string, number> = {};
    for (const char of word) {
      if (frequencyHash[char]) frequencyHash[char]++;
      else frequencyHash[char] = 1;

      hash[char] = Math.max(hash[char] ?? 0, frequencyHash[char]);
    }
  }

  const output = [];
  for (const [key, value] of Object.entries(hash)) {
    for (let i = 0; i < value; i++) {
      output.push(key);
    }
  }

  return output;
}

const INPUT = ['this', 'that', 'did', 'deed', 'them!', 'a'];
const result = minimumCharactersForWords(INPUT);
console.log(result);

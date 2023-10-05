export function semordnilap(words: string[]) {
  // Write your code here.
  const palindromes: string[][] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = i + 1; j < words.length; j++) {
      const toCompare = words[j];
      if (word.length === toCompare.length) {
        // we can compare this faster comparing indexes instead of reversing
        const reversed = toCompare.split('').reverse().join('');
        if (reversed === word) {
          palindromes.push([word, toCompare]);
          break;
        }
      }
    }
  }
  return palindromes;
}

export function semordnilap2(words: string[]) {
  // Write your code here.
  const set = new Set()
  const palindromes: string[][] = [];

  for(let word of words) {
    const reversed = word.split('').reverse().join('');
    if (set.has(reversed)) palindromes.push([reversed, word]);
    else set.add(word);
  }
  return palindromes;
}


const WORDS: string[] = ['diaper', 'abc', 'test', 'cba', 'repaid'];
const result = semordnilap2(WORDS);
console.log(result);

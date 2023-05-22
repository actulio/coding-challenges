export function reverseWordsInString(string: string) {
  // Write your code here.
  const output: string[] = [];
  let word: string[] = [];
  for (let char of string) {
    if (char !== ' ') word.push(char);
    else {
      output.unshift(word.length ? ' ' + word.join('') : ' ');
      console.log(output);
      word = [];
    }
  }
  output.unshift(word.join(''));
  return output.join('');
}

const INPUT = 'AlgoExpert is the best!';
const result = reverseWordsInString(INPUT);
console.log(`-${result}-`);

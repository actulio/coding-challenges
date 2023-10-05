export function longestPalindromicSubstring(string: string) {
  // Write your code here.
  for (let i = 0; i < string.length; i++) {
    let j = 0;
    let biggest = '';
    while (i - j >= 0 && i + j < string.length) {
      console.log(string[i - j], string[i + j], i, j);
      if (string[i - j] === string[i + j]) {
        //TODO:
        // const substring = string.substring(i - j, i + j);
        // console.log(substring);
        break;
      } else break;
      j++;
    }
    console.log(i, '-');
  }

  return '';
}

const INPUT = 'abaxyzzyxf';
const result = longestPalindromicSubstring(INPUT);
console.log(result);

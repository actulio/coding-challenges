export function isPalindrome(str: string) {
  for (let i = 0; i < str.length / 2; i++) {
    console.log(str[i], str[str.length - i - 1]);
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  // Write your code here.
  return true;
}

const STRING = 'abccba';
const result = isPalindrome(STRING);
console.log(result);

export function phoneNumberMnemonics(phoneNumber: string) {
  // Write your code here.
  const output: string[] = [];
  const map: Record<string, string[]> = {
    '1': ['1'],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
    '0': ['0'],
  };
  const current = new Array(phoneNumber.length).fill('0');

  const getMnemonic = (phoneIndex: number, currentMnemonic: string[]) => {
    if (phoneIndex === phoneNumber.length) {
      output.push(currentMnemonic.join(''));
      return;
    }
    const options = map[phoneNumber[phoneIndex]];
    for (const option of options) {
      currentMnemonic[phoneIndex] = option;
      getMnemonic(phoneIndex + 1, currentMnemonic);
    }
  };

  getMnemonic(0, current);

  return output;
}

const INPUT = '1905';
const result = phoneNumberMnemonics(INPUT);
console.log(result);

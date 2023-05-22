export function oneEdit(stringOne: string, stringTwo: string) {
  // Write your code here.
  const length1 = stringOne.length;
  const length2 = stringTwo.length;

  if (Math.abs(length1 - length2) > 1) return false;

  if (length1 === length2) {
    let mistakes = 0;
    for (let i = 0; i < length1; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        mistakes++;
      }
    }
    if (mistakes > 1) return false;
    return true;
  } else {
    let mistakes = 0;
    const shorter = length1 < length2 ? stringOne : stringTwo;
    const longer = length1 >= length2 ? stringOne : stringTwo;
    let j = 0;
    for (let i = 0; i < shorter.length; i++) {
      console.log(shorter[i], longer[j]);
      if (shorter[i] !== longer[j]) {
        if (shorter[i] !== longer[j + 1]) return false;
        mistakes++;
        j++;
      }
      j++;
      if (mistakes > 1) return false;
    }
    return true;
  }
}

export function oneEdit2(stringOne: string, stringTwo: string) {
  // Write your code here.
  const len1 = stringOne.length;
  const len2 = stringTwo.length;

  if (Math.abs(len1 - len2) > 1) return false;

  for (let i = 0; i < Math.min(len1, len2); i++) {
    if (stringOne[i] !== stringTwo[i]) {
      if (len1 > len2) return stringOne.substring(i + 1) === stringTwo.substring(i);
      else if (len2 > len1) return stringOne.substring(i) === stringTwo.substring(i + 1);
      else return stringOne.substring(i + 1) === stringTwo.substring(i + 1);
    }
  }
  return true;
}

export function oneEdit3(stringOne: string, stringTwo: string) {
  // Write your code here.
  const len1 = stringOne.length;
  const len2 = stringTwo.length;

  if (Math.abs(len1 - len2) > 1) return false;

  let hasMistake = false;
  let i = 0;
  let j = 0;

  while (i < len1 && j < len2) {
    if (stringOne[i] !== stringTwo[j]) {
      if (hasMistake) return false;
      hasMistake = true;
      if (len1 < len2) j++;
      else if (len1 > len2) i++;
      else {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  return true;
}

const stringOne = 'hillo';
const stringTwo = 'hello';

const result = oneEdit2(stringOne, stringTwo);
console.log(result);

export function runLengthEncoding(string: string) {
  // Write your code here.
  const encoded = [];
  let count = 1;
  for (let i = 1; i < string.length; i++) {
    const current = string[i];
    const previous = string[i - 1];

    if (current !== previous || count === 9) {
      encoded.push(`${count}${previous}`);
      count = 0;
    }

    count++;
  }
  encoded.push(`${count}${string[string.length - 1]}`);

  return encoded.join('');
}

const STRING = 'AAAAAAAAAAAAABBCCCCDD';
// const STRING =
//   'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
// // const STRING = 'aA';
const result = runLengthEncoding(STRING);
console.log(result);

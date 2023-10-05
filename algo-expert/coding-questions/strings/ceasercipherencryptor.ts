export function caesarCipherEncryptor(str: string, key: number) {
  // Write your code here.
  const copy = [];
  const keyed = key % 26;
  for (let i = 0; i < str.length; i++) {
    let ciphered = str.charCodeAt(i) + keyed;
    console.log(ciphered, ciphered % 123);
    copy.push(String.fromCharCode(ciphered <= 122 ? ciphered : (ciphered % 123) + 97));
  }

  return copy.join('');
}

const STRING = 'xyz';
const result = caesarCipherEncryptor(STRING, 2);
console.log(result);

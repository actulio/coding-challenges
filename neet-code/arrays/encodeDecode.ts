class Solution {
  encode(strs: string[]) {
    const res = [];
    for (let str of strs) {
      res.push(`${str.length}#${str}`);
    }
    return res.join('');
  }

  decode(str: string) {
    const res: string[] = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[i] !== '#') i++;

      const size = parseInt(str.slice(j, i));
      i++; // to account for the #
      const currentStr = str.slice(i, i + size);
      res.push(currentStr);
      i = i + size;
    }

    return res;
  }
}

const Input = ['we', 'say', ':', 'yes'];

const exec = new Solution();
const encoded = exec.encode(Input);
console.log(encoded);
console.log(exec.decode(encoded));

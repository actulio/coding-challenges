export function validIPAddresses(string: string) {
  // Write your code here.
  if (string.length < 4) return [];

  const foundAddresses: string[] = [];
  const len = string.length;

  for (let i = 0; i < 4; i++) {
    const currentAddress: string[] = ['', '', '', ''];

    const octet1 = string.slice(0, i);
    if (!isValidOctet(octet1)) continue;
    currentAddress[0] = octet1;

    for (let j = i + 1; j < i + Math.min(len - i, 4); j++) {
      const octet2 = string.slice(i, j);
      if (!isValidOctet(octet2)) continue;
      currentAddress[1] = octet2;

      for (let k = j + 1; k < j + Math.min(len - j, 4); k++) {
        const octet3 = string.slice(j, k);
        const octet4 = string.slice(k);
        if (!isValidOctet(octet3) || !isValidOctet(octet4)) continue;
        currentAddress[2] = octet3;
        currentAddress[3] = octet4;
        foundAddresses.push(currentAddress.join('.'));
      }
    }
  }

  return foundAddresses;
}

const isValidOctet = (string: string) => {
  const parsed = parseInt(string);
  return parsed < 256 ? parsed.toString().length === string.length : false;
};

const INPUT = '1921680';
const result = validIPAddresses(INPUT);
console.log(result);

export function isPalindrome(s: string): boolean {
  const mend = s.replace(/[\W_]+/g, '').toLowerCase();
  let fwd = 0;
  let bwd = mend.length - 1;

  while (fwd <= bwd) {
    if (mend[fwd] !== mend[bwd]) return false;
    fwd++;
    bwd--;
  }

  return true;
}

const input = " ";
console.log(isPalindrome(input));

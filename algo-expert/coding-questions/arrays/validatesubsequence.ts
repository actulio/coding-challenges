const ARRAY = [5, 1, 22, 25, 6, -1, 8, 10];
const SEQUENCE = [1, 6, -1, 10];

export function isValidSubsequence(array: number[], sequence: number[]) {
  // Write your code here.
  let seqIdx = 0;
  let seqCurr = sequence[seqIdx];
  for (let x of array) {
    if (x === seqCurr) {
      seqIdx++;
      if (seqIdx === sequence.length) return true;
      seqCurr = sequence[seqIdx];
    }
  }
  return false;
}

const result = isValidSubsequence(ARRAY, SEQUENCE);

console.log(result);

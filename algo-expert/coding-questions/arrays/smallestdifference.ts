export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  let pair: number[] = [];
  let smallestDifference = Infinity;

  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let pointerOne = 0;
  let pointerTwo = 0;
  const length1 = arrayOne.length;
  const length2 = arrayTwo.length;

  console.log(arrayOne, arrayTwo);

  while (pointerOne < length1 && pointerTwo < length2) {
    const op1 = arrayOne[pointerOne];
    const op2 = arrayTwo[pointerTwo];
    const difference = Math.abs(op1 - op2);
    console.log(op1, op2, ':', op1 - op2);
    if (difference === 0) return [op1, op2];
    if (op1 < op2) pointerOne++;
    else pointerTwo++;
    if (difference < smallestDifference) {
      pair = [op1, op2];
      smallestDifference = difference;
    }
  }

  // Write your code here.
  return pair;
}

const ARR1 = [10, 1000];
const ARR2 = [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530];

const result = smallestDifference(ARR1, ARR2);
console.log(result);

type Direction = -1 | 0 | 1; // down / side / up

export function longestPeak(array: number[]) {
  // Write your code here.
  let longestPeak = 0;

  for (let peak = 0; peak < array.length - 1; peak++) {
    let currentSum = 0;

    let i = peak - 1;
    let previous = array[peak];
    let isValid = false;
    console.log();
    console.log('current: ', array[peak]);

    while (i >= 0 && array[i] < previous) {
      // @ts-ignore
      // process.stdout.write(`[${array[i]} < ${array[peak]}] `);
      previous = array[i];
      isValid = true;
      i--;
      currentSum++;
    }

    if (!isValid) continue;
    isValid = false;

    i = peak + 1;
    previous = array[peak];

    while (i < array.length && previous > array[i]) {
      // @ts-ignore
      process.stdout.write(`[${array[peak]} > ${array[i]}] `);
      previous = array[i];
      i++;
      currentSum++;
      isValid = true;
    }
    console.log(`currentSum: ${currentSum}`);
    if (isValid && currentSum > longestPeak) longestPeak = currentSum;
  }

  return longestPeak ? longestPeak + 1 : 0;
}

const INPUT = [5, 4, 3, 2, 1, 2, 1];
const result = longestPeak(INPUT);
console.log(result);

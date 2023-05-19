export function hasSingleCycle(array: number[]) {
  // Write your code here.

  const length = array.length;
  let counter = 0;
  let idx = 0;

  while (counter < length) {
    if (array[idx] === Infinity) return false;
    const jump = array[idx];
    array[idx] = Infinity;

    // @ts-ignore
    process.stdout.write(`jump ${jump} *** `);

    // const jump = array[idx]
    idx = idx + jump;
    // @ts-ignore
    process.stdout.write(`${idx} `);
    idx = idx % length;
    // @ts-ignore
    process.stdout.write(`${idx} `);

    if (idx < 0) idx = length + idx;
    // @ts-ignore
    process.stdout.write(`${idx} `);

    console.log();
    counter++;
  }

  if (idx) return false;

  return true;
}

const INPUT = [2, 3, 1, -4, -4, 2];
const result = hasSingleCycle(INPUT);
console.log(result);

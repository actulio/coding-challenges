// export function dailyTemperatures(temperatures: number[]): number[] {
//   const result: number[] = [];
//   const stack: number[] = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
//       const top = stack.pop()!;
//       result[top] = i - top;
//     }
//     stack.push(i);
//   }

//   return result;
// }

export function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    result.push(0);
    const currentTemp = temperatures[i];
    let j = i + 1;
    while (j < temperatures.length) {
      if (temperatures[j] > currentTemp) {
        result[i] = j - i;
        break;
      }
      j++;
    }
  }

  return result;
}

const input = [30, 60, 90];
console.log(dailyTemperatures(input));

export function tandemBicycle(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
) {
  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest) blueShirtSpeeds.sort((a, b) => b - a);
  else blueShirtSpeeds.sort((a, b) => a - b);

  console.log(redShirtSpeeds, blueShirtSpeeds);
  let sum = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    sum += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }
  console.log(sum);

  // Write your code here.
  return -1;
}

const REDSHIRTSPEEDS = [5, 5, 3, 9, 2];
const BLUESHIRTSPEEDS = [3, 6, 7, 2, 1];

const result = tandemBicycle(REDSHIRTSPEEDS, BLUESHIRTSPEEDS, false);

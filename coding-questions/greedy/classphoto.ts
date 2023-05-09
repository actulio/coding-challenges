export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
  // Write your code here.
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const backRow = redShirtHeights[0] >= blueShirtHeights[0] ? redShirtHeights : blueShirtHeights;
  const frontRow = redShirtHeights[0] >= blueShirtHeights[0] ? blueShirtHeights : redShirtHeights;

  for(let i = 0; i < backRow.length; i++) {
    if(backRow[i] <= frontRow[i]) return false;
  }

  return true;
}

const A = [5, 8, 1, 3, 4];
const B = [6, 9, 2, 4, 5];

const result = classPhotos(A, B);
console.log(result);

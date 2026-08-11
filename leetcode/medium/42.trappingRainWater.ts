function trap(height: number[]): number {
  let amount = 0;
  for (let i = 1; i < height.length - 1; i++) {
    const currentHeight = height[i];
    let highestLeft = 0;
    let highestRight = 0;

    let j = i - 1;
    while (j >= 0) {
      highestLeft = Math.max(highestLeft, height[j]);
      j--;
    }
    j = i + 1;
    while (j < height.length) {
      highestRight = Math.max(highestRight, height[j]);
      j++;
    }
    const waterColumn = Math.min(highestLeft, highestRight) - currentHeight;
    console.log(i, ': ', highestLeft, currentHeight, highestRight, '= ', waterColumn);
    amount = waterColumn > 0 ? amount + waterColumn : amount;
  }
  return amount;
}

function trapPrefixSuffix(height: number[]): number {
  const len = height.length;
  const prefixArr = new Array(len).fill(0);
  const suffixArr = new Array(len).fill(0);

  for (let i = 1; i < len; i++) {
    prefixArr[i] = Math.max(prefixArr[i - 1], height[i - 1]);
  }

  for (let i = len - 2; i >= 0; i--) {
    suffixArr[i] = Math.max(suffixArr[i + 1], height[i + 1]);
  }

  let amount = 0;
  for (let i = 1; i < height.length - 1; i++) {
    const currentHeight = height[i];
    const waterColumn = Math.min(prefixArr[i], suffixArr[i]) - currentHeight;
    amount = waterColumn > 0 ? amount + waterColumn : amount;
  }
  return amount;
}

// const input = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
const input = [4, 2, 0, 3, 2, 5];
console.log(trapPrefixSuffix(input));

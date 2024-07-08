export function containerWithMostWater(height: number[]): number {
  let maxArea = 0;
  let slidingWindow_left = 0;
  let slidingWindow_right = height.length - 1;

  while (slidingWindow_left < slidingWindow_right) {
    const leftHeight = height[slidingWindow_left];
    const rightHeight = height[slidingWindow_right];
    const area = Math.min(leftHeight, rightHeight) * (slidingWindow_right - slidingWindow_left);
    maxArea = Math.max(area, maxArea);
    if (leftHeight < rightHeight) slidingWindow_left++;
    else slidingWindow_right--;
  }

  return maxArea;
}

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(containerWithMostWater(input));

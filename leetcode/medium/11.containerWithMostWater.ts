function maxArea(height: number[]): number {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    maxArea = Math.max(area, maxArea);
    if (height[l] <= height[r]) l++;
    else r--;
  }
  return maxArea;
}

const input = [1, 7, 2, 5, 12, 3, 500, 500, 7, 8, 4, 7, 3, 6];
console.log(maxArea(input));

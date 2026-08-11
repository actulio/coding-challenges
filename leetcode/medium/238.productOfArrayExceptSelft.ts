function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  const res: number[] = new Array(length);
  const suffixArr = new Array(length);
  const prefixArr = new Array(length);

  prefixArr[0] = 1;
  for (let i = 1; i < length; i++) {
    prefixArr[i] = prefixArr[i - 1] * nums[i - 1];
  }

  suffixArr[length - 1] = 1;
  for (let i = length - 2; i >= 0; i--) {
    suffixArr[i] = suffixArr[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < length; i++) {
    res[i] = prefixArr[i] * suffixArr[i];
  }

  return res;
}

const input = [1, 2, 4, 6];
// const input = [-1, 0, 1, 2, 3];
console.log(productExceptSelf(input));

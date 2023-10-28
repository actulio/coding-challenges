export function productExceptSelf(nums: number[]): number[] {
  const pre = [nums[0]];
  const post = [nums[nums.length - 1]];

  for (let i = 1; i < nums.length; i++) pre.push(nums[i] * pre[i - 1]);

  for (let i = 1; i < nums.length; i++)
    post.unshift(nums[nums.length - i - 1] * post[post.length - i]);

  const output = [];
  for (let i = 0; i < nums.length; i++) {
    if (i - 1 < 0) output.push(1 * post[i + 1]);
    else if (i + 1 >= nums.length) output.push(pre[i - 1] * 1);
    else output.push(pre[i - 1] * post[i + 1]);
  }

  return output;
}

export function productExceptSelf2(nums: number[]): number[] {
  const output = [1];
  for (let i = 1; i < nums.length; i++) output.push(output[i - 1] * nums[i - 1]);

  for(let i = nums.length; i > 0; i--){
    
  }


  return output;
  console.log(output);
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf2(nums));

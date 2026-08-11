const test = (nums: number[], k: number) => {
  const count: Record<number, number> = {};
  const freqArray = Array.from({ length: nums.length + 1 }, () => [] as number[]);

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  const entries = Object.entries(count);

  for (const [key, freq] of entries) {
    console.log(key, freq);
    freqArray[freq].push(+key);
  }

  const res = [];
  for (let i = freqArray.length - 1; i > 0; i--) {
    // for(let j = 0; j < freqArray[i].length; j++) {}
    const cut: number = k - res.length;
    if (cut <= 0) break;
    if (freqArray[i].length) {
      res.push(...freqArray[i].slice(0, cut));
    }
  }

  console.log(freqArray);
  console.log(res)
};

const test2 = () => {
  
}


const nums = [4, 4, 4, 1, 1, 1, 2, 2, 3, 3, 3, 3];
console.log(test(nums, 2));

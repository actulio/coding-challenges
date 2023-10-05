export function sweetAndSavory(dishes: number[], target: number) {
  // Write your code here.
  dishes.sort((a, b) => a - b);
  if (dishes[0] >= 0) return [0, 0]; // no sweet dishes

  let i = 0;
  while (dishes[i] < 0) {}
  return [];
}

export function sweetAndSavoryPointers(dishes: number[], target: number) {
  dishes.sort((a, b) => a - b);
  console.log(dishes);
  if (dishes[0] >= 0) return [0, 0]; // no sweet dishes

  let start = 0;
  let end = dishes.length - 1;
  let best = [0, 0];

  while (start < end && dishes[start] < 0 && dishes[end] > 0) {
    const sum = dishes[start] + dishes[end];
    if (sum === target) {
      best = [dishes[start], dishes[end]];
      break;
    }

    console.log(start, end, '[', dishes[start], dishes[end], '] =', sum, best);
    if (sum > target) end--;
    else {
      best = [dishes[start], dishes[end]];
      start++;
    }

  }
  // Write your code here.
  return best;
}

const dishes = [17, 37, 12, -102, 53, 49, -90, 102, 49, 16, 52];
const target = 11;
const result = sweetAndSavoryPointers(dishes, target);
console.log(result);

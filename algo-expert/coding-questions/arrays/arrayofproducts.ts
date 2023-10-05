export function arrayOfProducts(array: number[]) {
  // Write your code here.
  const output = [];

  for (let i = 0; i < array.length; i++) {
    let sum = 1;
    for (let j = 0; j < array.length; j++) {
      if (i === j) continue;
      sum = sum * array[j];
    }
    output.push(sum);
  }

  return output;
}

export function arrayOfProducts2(array: number[]) {
  // Write your code here.
  const output = [];
  const left = [];
  const right = [];

  let product = 1;
  right.push(product);
  for (let i = 0; i < array.length - 1; i++) {
    product = product * array[i];
    right.push(product);
  }

  product = 1;
  left.push(product);
  for (let i = array.length - 1; i > 0; i--) {
    product = product * array[i];
    left.unshift(product);
  }

  console.log(right, left)

  for (let i = 0; i < array.length; i++) {
    output.push(right[i] * left[i]);
  }

  return output;
}

const INPUT = [5, 1, 4, 2];
const result = arrayOfProducts2(INPUT);
console.log(result);

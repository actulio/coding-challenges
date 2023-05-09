type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray, depth = 1) {
  // Write your code here.
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    console.log('depth', depth, 'sum', sum, array[i], Array.isArray(array[i]))
    if(Array.isArray(array[i])) {
      sum += productSum(array[i] as SpecialArray, depth + 1);
    } else {
      sum += array[i] as number;
    }
  }

  return sum * depth;
}

const ARRAY = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

const result = productSum(ARRAY);
console.log(result);

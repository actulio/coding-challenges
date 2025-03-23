type MultiDimensionalArray = (number | MultiDimensionalArray)[];

export var flat = function (
  arr: MultiDimensionalArray,
  n: number,
  currentDepth = 0,
  result = [] as MultiDimensionalArray
): MultiDimensionalArray {
  if (!Array.isArray(arr)) {
    result.push(arr);
    return result;
  }

  for (let elem of arr) {
    if (currentDepth >= n) result.push(elem);
    else flat(elem as any[], n, currentDepth + 1, result);
  }
  return result;
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const depth = 3;

const res = flat(arr, depth);

console.log(res);

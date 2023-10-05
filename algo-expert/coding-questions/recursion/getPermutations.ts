export function getPermutations(array: number[]) {
  // Write your code here.
  const output: number[][] = [];

  const helper = (current: number, permutation: number[], set: Set<number>) => {
    if (set.size === 0) return;

    permutation.push(current);

    const copy = new Set(set);
    copy.delete(current);
    if (set.size === 1) output.push([...permutation]);

    for (const op of copy) {
      helper(op, [...permutation], copy);
    }
  };

  for (const op of array) {
    helper(op, [], new Set(array));
  }

  return output;
}

const INPUT = [1, 2, 3, 4];
const result = getPermutations(INPUT);
console.log(result);

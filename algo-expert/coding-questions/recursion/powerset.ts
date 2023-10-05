export function powerset(array: number[]) {
  // Write your code here.

  const sets: number[][] = [[]];
  for (const element of array) {
    const newSets = [];
    for (const set of sets) {
      const aux = [...set, element];
      newSets.push(aux);
    }
    sets.push(...newSets);
  }

  return sets;
}

export function powerset2(array: number[]) {
  // Write your code here.

  const sets: number[][] = [[]];
  for (const element of array) {
    const newSets = [];
    for (const set of sets) {
      const aux = [...set, element];
      newSets.push(aux);
    }
    sets.push(...newSets);
  }

  return sets;
}

const INPUT = [1, 2, 3];
const result = powerset2(INPUT);
console.log(result);

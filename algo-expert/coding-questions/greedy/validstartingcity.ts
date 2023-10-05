export function validStartingCity(distances: number[], fuel: number[], mpg: number) {
  // Write your code here.
  const currentDistance = distances[0];
  const remainingFuel = 0;

  let currentAutonomy = 0;
  let currentValid = 0;
  for (let i = 0; i < distances.length; i++) {
    console.log('Before: ', currentAutonomy);
    currentAutonomy += fuel[i] * mpg;
    console.log('After:  ', currentAutonomy);

    if (currentAutonomy < distances[i]) {
      currentValid = i + 1;
      console.log(currentValid);

      currentAutonomy = 0;
      continue;
    }

    console.log(currentValid);

    currentAutonomy -= distances[i];
  }
  return currentValid;
}

// const DISTANCES = [5, 25, 15, 10, 15];
// const FUEL = [1, 2, 1, 0, 3];
const DISTANCES = [10, 20, 10, 15, 5, 15, 25];
const FUEL = [0, 2, 1, 0, 0, 1, 1];
const MPG = 20;

const result = validStartingCity(DISTANCES, FUEL, MPG);
console.log('---------', result);

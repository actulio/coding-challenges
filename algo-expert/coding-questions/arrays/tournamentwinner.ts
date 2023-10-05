const COMPETITIONS = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
];
const RESULTS = [0, 0, 1];

export function tournamentWinner(competitions: string[][], results: number[]) {
  // Write your code here.
  const hash: Record<string, number> = {};
  for (let round = 0; round < results.length; round++) {
    const winner = competitions[round][results[round] ? 0 : 1];
    hash[winner] = (hash[winner] ?? 0) + 3;
  }

  const keys = Object.keys(hash);
  let bigger = keys[0];
  keys.forEach((key) => {
    if (hash[key] >= hash[bigger]) {
      bigger = key;
    }
  });

  return bigger;
}

const result = tournamentWinner(COMPETITIONS, RESULTS);

console.log(result);

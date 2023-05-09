const COINS = [5, 7, 1, 1, 2, 3, 22];

export function nonConstructibleChange(coins: number[]) {
  // Write your code here.
  coins.sort((a, b) => a - b);
  let change = 0;

  for (let coin of coins) {
    if (coin > change + 1) {
      return change + 1;
    } else {
      change += coin;
    }
  }

  return change + 1;
}

const result = nonConstructibleChange(COINS);

console.log(result);

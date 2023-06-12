export function blackjackProbability(target: number, startingHand: number) {
  // Write your code here.
  const memo: Record<number, number> = {};

  const calculateProbability = (
    currentHand: number,
    target: number,
    memo: Record<number, number>
  ) => {
    if (currentHand in memo) return memo[currentHand];
    if (currentHand > target) return 1;
    if (currentHand >= target - 4) return 0;

    let probability = 0;
    for (let i = 1; i <= 10; i++) {
      probability += 0.1 * calculateProbability(currentHand + i, target, memo);
    }
    memo[currentHand] = probability;
    return probability;
  };

  return calculateProbability(startingHand, target, memo).toFixed(3);
}

const INPUTA = 21;
const INPUTB = 15;

const result = blackjackProbability(INPUTA, INPUTB);
console.log(result);

export function getNthFib(n: number): number {
  // Write your code here.
  if (n === 1) return 0;
  if (n === 2) return 1;

  return getNthFib(n - 1) + getNthFib(n - 2);
}

export function getNthFib2(n: number): number {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let prev2 = 0;
  let prev1 = 1;

  for (let i = 2; i < n - 1; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1 + prev2;
}

export function getNthFib3(n: number, memo: Record<number, number> = {}): number {
  if (n === 1) return 0;
  if (n === 2) return 1;

  if (memo[n]) return memo[n];
  memo[n] = getNthFib3(n - 1, memo) + getNthFib3(n - 2, memo);
  return memo[n];
}

const result = getNthFib3(8);
console.log(result);

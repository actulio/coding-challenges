const lucky8s = (money: number, people: number) => {
  let lucky8s = Math.floor(money / 8);
  let remainingMoney = money - lucky8s * 8;

  // giving the 8s to the lucky, is there enough money left?
  // keep removing lucky 8s until there is enough money left for the rest
  while (remainingMoney - (people - lucky8s) * 1 < 0 && lucky8s > 0) {
    remainingMoney += 8;
    lucky8s--;
  }

  // if there is only one person left, and the remaining money is 4, we have to
  // redistribute the money from one lucky8
  if (remainingMoney === 4 && people - lucky8s === 1) lucky8s--;

  return lucky8s;
};

const testCases = [
  { money: 24, people: 3 },
  { money: 25, people: 2 },
  { money: 25, people: 4 },
  { money: 28, people: 4 },
  { money: 24, people: 11 },
  { money: 7, people: 11 },
  { money: 8, people: 2 },
  { money: 16, people: 3 },
  { money: 15, people: 3 },
];

for (const testCase of testCases) {
  const res = lucky8s(testCase.money, testCase.people);
  console.log(`--Lucky8s: ${res}-- Money: ${testCase.money}, People: ${testCase.people}`);
}

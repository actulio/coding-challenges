export function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      const curr = board[i][j];
      if (curr === '.') continue;
      if (set.has(curr)) return false;
      else set.add(curr);
    }
  }

  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      const curr = board[j][i];
      if (curr === '.') continue;
      if (set.has(curr)) return false;
      else set.add(curr);
    }
  }

  for (let i = 0; i < board.length; i++) {
    const rowStart = Math.floor(i / 3) * 3;
    const colStart = (i % 3) * 3;
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      const row = rowStart + Math.floor(j / 3);
      const col = colStart + (j % 3);
      const curr = board[row][col];
      if (curr === '.') continue;
      if (set.has(curr)) return false;
      else set.add(curr);
    }
  }

  return true;
}

const INPUT = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(INPUT));

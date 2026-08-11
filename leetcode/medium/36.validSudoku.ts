function isValidSudoku(board: string[][]): boolean {
  const horizontal = new Map<number, Set<number>>();
  const vertical = new Map<number, Set<number>>();
  const squares = new Map<number, Set<number>>();

  for (let i = 0; i < 9; i++) {
    horizontal.set(i, new Set());
    vertical.set(i, new Set());
    squares.set(i, new Set());
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === '.') continue;

      const elem = parseInt(board[row][col]);
      const sIdx = Math.floor(row / 3) + Math.floor(col / 3) * 3;

      const hSet = horizontal.get(row)!;
      const vSet = vertical.get(col)!;
      const sSet = squares.get(sIdx)!;

      // const sIdx = (row % 3) * 3 + (col % 3);
      console.log(`[${row}][${col}]`, sIdx);
      console.log(Math.floor(row / 3), Math.floor(col / 3));
      // const sSet = squares.get((row % 3) + (col % 3))

      if (hSet.has(elem) || vSet.has(elem) || sSet.has(elem)) return false;
      else {
        hSet.add(elem);
        vSet.add(elem);
        sSet.add(elem);
      }
    }
  }

  return true;
}

const input = [
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

console.log(isValidSudoku(input));

//First Idea:
//Set two map, one for n-rows, another for n-columns.
//The key is elements(ex:[2,4,2,2]), the value is index.

//2352. Equal Row and Column Pairs
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const rowMap = {};
  const colMap = {};

  for (let i = 0; i < grid.length; i++) {
    const key = grid[i].toString();
    rowMap[key] = rowMap[key] ? [...rowMap[key], i] : [i];
  }

  for (let i = 0; i < grid[0].length; i++) {
    const tmpArr = [];
    for (let j = 0; j < grid.length; j++) {
      tmpArr.push(grid[j][i]);
    }
    const key = tmpArr.toString();
    colMap[key] = colMap[key] ? [...colMap[key], i] : [i];
  }

  let counter = 0;
  Object.keys(rowMap).forEach((key) => {
    if (colMap.hasOwnProperty(key))
      counter += rowMap[key].length * colMap[key].length;
  });

  return counter;
};

var equalPairsFromLeetcode = function (grid) {
  const n = grid.length;
  let count = 0;
  const rows = new Map();

  for (let r = 0; r < n; r++) {
    const row = JSON.stringify(grid[r]);
    rows.set(row, 1 + (rows.get(row) || 0));
  }

  for (let c = 0; c < n; c++) {
    const col = JSON.stringify(grid.map((row) => row[c]));
    count += rows.get(col) || 0;
  }

  return count;
};

let grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];

console.log(equalPairs(grid));

//994. Rotting Oranges
//First Idea:
//Use BFS, until there is no good orange from rotten.
//And check if there is '1' in grid.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const queue = [];
  let ansDays = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] == 2) queue.push([x, y, 0]);
    }
  }
  if (queue.length == 0) return 0;

  const fourDir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length != 0) {
    const [curX, curY, days] = queue.shift();
    for (const [dx, dy] of fourDir) {
      const [nX, nY] = [curX + dx, curY + dy];
      if (grid[nX]?.[nY] == 1) {
        grid[nX][nY] = 2;
        queue.push([nX, nY, days + 1]);
      }
    }
    if (queue.length == 0) ansDays = days;
  }

  let freshExist = grid.flat().some((x) => x == 1);
  return freshExist ? -1 : ansDays;
};

// let grid = [
//   [2, 1, 1],
//   [1, 1, 0],
//   [0, 1, 1],
// ];

let grid = [
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1],
];

const queue = [];
let ansDays;

for (let x = 0; x < grid.length; x++) {
  for (let y = 0; y < grid[0].length; y++) {
    if (grid[x][y] == 2) queue.push([x, y, 0]);
  }
}

const fourDir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

while (queue.length != 0) {
  const [curX, curY, days] = queue.shift();
  for (const [dx, dy] of fourDir) {
    const [nX, nY] = [curX + dx, curY + dy];
    if (grid[nX]?.[nY] == 1) {
      grid[nX][nY] = 2;
      queue.push([nX, nY, days + 1]);
    }
  }
  if (queue.length == 0) {
    console.log("got it!");
    ansDays = days;
  }
}

console.log(ansDays);
console.log(grid.flat().some((x) => x == 1));

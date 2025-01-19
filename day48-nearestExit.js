//1926. Nearest Exit from Entrance in Maze
//First Idea:
//From entrance, using BFS to check if reach the exit(row/col equal 0).

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

// Almost correct, haha
var nearestExitOri = function (maze, entrance) {
  const queue = [entrance];
  let step = 0;
  let foundAns = false;
  let numOfLayer = 1;

  while (queue.length != 0) {
    console.log(`step:${step}`);
    console.log(queue);

    const [curRow, curCol] = queue.shift();
    if (step && (!curRow || !curCol)) {
      foundAns = true;
      break;
    }

    console.log(curCol);
    console.log(curRow);

    if (curRow > 0 && maze[curRow - 1][curCol] == ".")
      queue.push([curRow - 1, curCol]);
    if (curRow < maze.length - 1 && maze[curRow + 1][curCol] == ".")
      queue.push([curRow + 1, curCol]);
    if (curCol > 0 && maze[curRow][curCol - 1] == ".")
      queue.push([curRow, curCol - 1]);
    if (curCol < maze[0].length - 1 && maze[curRow][curCol + 1] == ".")
      queue.push([curRow, curCol + 1]);

    console.log(queue);

    numOfLayer--;
    if (numOfLayer == 0) {
      numOfLayer = queue.length;
      step++;
    }
  }

  console.log("inner");
  console.log(foundAns);

  return foundAns ? step : -1;
};

let maze = [
  ["+", ".", "+", "+", "+", "+", "+"],
  ["+", ".", "+", ".", ".", ".", "+"],
  ["+", ".", "+", ".", "+", ".", "+"],
  ["+", ".", ".", ".", "+", ".", "+"],
  ["+", "+", "+", "+", "+", ".", "+"],
];
let entrance = [0, 1];

//https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2834714/javascript-neat-bfs/?envType=study-plan-v2&envId=leetcode-75
//Oh,, i forgot the '?' operator..
const nearestExitByLeetcode = (maze, [y0, x0]) => {
  maze[y0][x0] = "@";
  const queue = [[y0, x0, 0]];
  while (queue.length) {
    const [y, x, step] = queue.shift();
    for (const [dy, dx] of [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ]) {
      const ny = y + dy,
        nx = x + dx;
      if (!maze[ny]?.[nx]) {
        if (step) return step;
      } else if (maze[ny][nx] === ".") {
        queue.push([ny, nx, step + 1]);
        maze[ny][nx] = "*"; //Maybe u can set another symbol. by farmer
      }
    }
  }
  return -1;
};

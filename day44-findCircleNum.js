//547. Number of Provinces
//First Idea:
//Iterate the false in array 'visited', until they are all true?
//DFS @ Graph... try it! :)

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const visited = Array(isConnected.length).fill(false);
  let count = 0;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      count++;
      dfs(i);
    }
  }

  return count;

  function dfs(city) {
    visited[city] = true;
    const neighbor = isConnected[city];
    for (let i = 0; i < neighbor.length; i++) {
      if (neighbor[i] && !visited[i]) dfs(i);
    }
  }
};

// let isConnected = [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1],
// ];

let isConnected = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

const visited = Array(isConnected.length).fill(false);
let count = 0;
for (let i = 0; i < visited.length; i++) {
  console.log(`i:${i}`);

  if (!visited[i]) {
    console.log(`go dfs`);

    count++;
    dfs(i);
  }
}

function dfs(city) {
  console.log(`i am visiting  - ${city}`);

  visited[city] = true;
  const neighbor = isConnected[city];
  for (let i = 0; i < neighbor.length; i++) {
    if (neighbor[i] && !visited[i]) dfs(i);
  }
}

console.log(visited);
console.log(count);

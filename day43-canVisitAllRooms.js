//841. Keys and Rooms
//First Idea:
//U can imagine a graph, the node's value is the index.
//And the edges between two nodes means one room has the key to another.
//Try to use DFS?
//If some node is already visited, ignore the edge.

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = Array(rooms.length).fill(false);
  dfs(0);
  return visited.every(Boolean);

  function dfs(rIndex) {
    visited[rIndex] = true;
    const keys = rooms[rIndex];
    for (const key of keys) {
      if (!visited[key]) dfs(key);
    }
  }
};

let rooms = [[1], [2], [3], []];
// let rooms = [[1, 3], [3, 0, 1], [2], [0]];

const visited = Array(rooms.length).fill(false);

function dfs(rIndex) {
  visited[rIndex] = true;
  const keys = rooms[rIndex];
  for (const key of keys) {
    if (!visited[key]) dfs(key);
  }
}

console.log(visited);
dfs(0);
console.log(visited);

console.log(visited.every(Boolean));

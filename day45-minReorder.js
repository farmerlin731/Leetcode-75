//1466. Reorder Routes to Make All Paths Lead to the City Zero
//First Idea:
//Iterate the edge, and the complexity is O(n2)? -> n is the number of length.
//Oh,, create a hashMap first,, the space change to time.. (like 'two-sum')

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const visited = Array(n).fill(false);

  const cMap = Array.from({ length: n }, () => []);

  for (const [start, end] of connections) {
    cMap[start].push([end, false]);
    cMap[end].push([start, true]);
  }

  let count = 0;
  function dfs(city) {
    visited[city] = true;
    for (const [neighbor, direction] of cMap[city]) {
      if (!visited[neighbor]) {
        if (!direction) count++;
        dfs(neighbor);
      }
    }
  }

  dfs(0);
  return count;
};

let n = 6,
  connections = [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ];

const visited = Array(n).fill(false);

const cMap = {};

for (const [start, end] of connections) {
  if (!cMap[start]) {
    cMap[start] = [[end, false]];
  } else {
    cMap[start].push([end, false]);
  }

  if (!cMap[end]) {
    cMap[end] = [[start, true]];
  } else {
    cMap[end].push([start, true]);
  }
}

console.log(cMap);
let count = 0;
function dfs(city) {
  visited[city] = true;
  for (const [neighbor, direction] of cMap[city]) {
    if (!visited[neighbor]) {
      if (!direction) {
        console.log(`city:${city},nei:${neighbor},dir:${direction}`);

        count++;
      }
      dfs(neighbor);
    }
  }
}

dfs(0);
console.log(`count:${count}`);

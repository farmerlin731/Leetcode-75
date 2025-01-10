//399. Evaluate Division
//First Idea:
//Think alphabet as a city, and the edge means the multiplier?
//Create the graph, and group them?
//Elegant Solution:https://leetcode.com/problems/evaluate-division/solutions/1956328/easy-to-understand-javascript-solution-dfs

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const strMap = equations.reduce((result, [a, b], index) => {
    const value = values[index];
    const neiA = result.get(a) || {};
    const neiB = result.get(b) || {};
    result.set(a, { ...neiA, [b]: value });
    result.set(b, { ...neiB, [a]: 1 / value });
    return result;
  }, new Map());

  return queries.map((item) => dfs(item) || -1);

  function dfs([strA, strB], visited = new Set(), current = 1) {
    if (!strMap.has(strA) || !strMap.has(strB)) return -1;
    if (strA == strB) return current;

    const nei = strMap.get(strA);
    visited.add(strA);

    let result = null;
    for (const key in nei) {
      if (visited.has(key)) continue;
      result = dfs([key, strB], visited, current * nei[key]);
      if (result) break;
    }
    return result;
  }
};

let equations = [
    ["a", "b"],
    ["b", "c"],
  ],
  values = [2.0, 3.0],
  queries = [
    ["a", "c"],
    ["b", "a"],
    ["a", "e"],
    ["a", "a"],
    ["x", "x"],
  ];

const strMap = equations.reduce((result, [a, b], index) => {
  const value = values[index];
  const neiA = result.get(a) || {};
  const neiB = result.get(b) || {};
  result.set(a, { ...neiA, [b]: value });
  result.set(b, { ...neiB, [a]: 1 / value });
  return result;
}, new Map());

function dfs([strA, strB], visited = new Set(), current = 1) {
  console.log("newRun!");

  console.log(strA, strB, visited, current);

  if (!strMap.has(strA) || !strMap.has(strB)) return -1;
  if (strA == strB) return current;

  const nei = strMap.get(strA);
  visited.add(strA);

  let result = null;
  for (const key in nei) {
    if (visited.has(key)) continue;
    result = dfs([key, strB], visited, current * nei[key]);
    if (result) break;
  }
  return result;
}

// const ans = queries.map((item) => dfs(item) || -1);
// console.log(strMap);
// console.log(dfs(["a", "x"]));
// console.log(ans);
console.log(calcEquation(equations, values, queries));

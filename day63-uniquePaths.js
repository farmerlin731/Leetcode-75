//62. Unique Paths
//First Idea:
//Use DP, 2-dim array, the num of box is the addition of up & left.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dpArr = Array.from({ length: m }, () => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dpArr[i][j] = dpArr[i - 1][j] + dpArr[i][j - 1];
    }
  }

  return dpArr[m - 1][n - 1];
};

let m = 3,
  n = 7;

console.log(uniquePaths(m, n));

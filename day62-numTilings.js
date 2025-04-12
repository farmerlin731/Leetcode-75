//790. Domino and Tromino Tiling
//First Idea:
//Use DP, F(n) = "F(n-3)+F(3)"+"F(n-2)+F(2)"+"F(n-1)+F(1)""
//Oh,, need to think more shapes!
//https://leetcode.com/problems/domino-and-tromino-tiling/solutions/1893115/sneeit-solution-domino-and-tromino-tiling-with-explanation/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  let mod = 10 ** 9 + 7;
  const dp = n >= 3 ? Array(n + 1).fill(0) : [0, 0, 0, 0];

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;

  for (let i = 4; i <= n; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % mod;
  }

  return dp[n];
};

let n = 4;

console.log(numTilings(n));

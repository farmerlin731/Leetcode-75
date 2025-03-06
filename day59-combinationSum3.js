//216. Combination Sum III
//First Idea:
//Backtracking... stop when the sum is bigger than n
//Recursion?
//Leetcode Solu: https://leetcode.com/problems/combination-sum-iii/solutions/844197/javascript-clean-code-72-ms

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const ans = [];
  helperPermute([], 0, 1);
  return ans;

  function helperPermute(arr, sum, start) {
    if (sum > n) return;
    if (arr.length == k) {
      if (sum == n) ans.push(arr);
      else return;
    }

    for (let i = start; i < 10; i++) {
      helperPermute([...arr, i], sum + i, i + 1);
    }
  }
};

let k = 3,
  n = 7;
// let k = 4,
//   n = 1;

console.log(combinationSum3(k, n));

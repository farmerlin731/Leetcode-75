//First Idea:
//DFS, and put an array into arguments?
//Memorize is fascinating..
//Oh,, the reason why do we minor the freq is u can't use the route when u back to top ...
//437. Path Sum III

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSumBruteForce = function (root, targetSum) {
  if (!root) return 0;
  let count = 0;
  dfs(root);
  return count;

  function dfs(node) {
    chekSum(node, 0);
    if (node.left) dfs(node.left, 0);
    if (node.right) dfs(node.right, 0);
  }
  function chekSum(node, preSum) {
    let curSum = preSum + node.val;
    if (curSum == targetSum) count++;
    if (node.left) chekSum(node.left, curSum);
    if (node.right) chekSum(node.right, curSum);
  }
};

var pathSumMemorize = function (root, targetSum) {
  if (!root) return 0;

  const map = { 0: 1 };
  return dfs(root, 0);

  function dfs(node, preSum) {
    let count = 0;
    let curSum = node.val + preSum;
    let redundant = curSum - targetSum;
    count += map[redundant] || 0;
    map[curSum] = (map[curSum] || 0) + 1;
    if (node.left) count += dfs(node.left, curSum);
    if (node.right) count += dfs(node.right, curSum);
    map[curSum]--;
    return count;
  }
};

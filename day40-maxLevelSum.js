//First Idea:
//The similar question of the previous one : 199. Binary Tree Right Side View
//BFS & DFS are both available on this question, but i think DFS is more elegant.

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
 * @return {number}
 */
var maxLevelSum = function (root) {
  const sumArr = [];
  helper(root, 0);
  return sumArr.indexOf(Math.max(...sumArr)) + 1;

  function helper(node, layer) {
    if (!node) return;
    sumArr[layer] = (sumArr[layer] || 0) + node.val;
    helper(node.left, layer + 1);
    helper(node.right, layer + 1);
  }
};

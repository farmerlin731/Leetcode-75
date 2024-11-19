//First Idea:
//DFS, and put an array into arguments?
//Oh,, just need to put a max value Q_Q
//1448. Count Good Nodes in Binary Tree

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
var goodNodes = function (root) {
  let count = 0;
  function helper(node, max) {
    if (node.val >= max) {
      count++;
      max = node.val;
    }
    if (node.left) helper(node.left, max);
    if (node.right) helper(node.right, max);
  }
  helper(root, -Infinity);
  return count;
};

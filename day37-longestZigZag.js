//First Idea:
//Send the cur-direction with argument, and reset the count if the same direction.

//1372. Longest ZigZag Path in a Binary Tree

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
var longestZigZag = function (root) {
  let maxLength = 0;
  if (root.left) dfs(root.left, 1, false);
  if (root.right) dfs(root.right, 1, true);
  return maxLength;

  //rightSide is 'True' or 'False'
  function dfs(node, length, rightSide) {
    maxLength = Math.max(maxLength, length);
    let leftLength = rightSide ? length + 1 : 1;
    let rightLength = rightSide ? 1 : length + 1;

    if (node.left) dfs(node.left, leftLength, false);
    if (node.right) dfs(node.right, rightLength, true);
  }
};

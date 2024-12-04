//700. Search in a Binary Search Tree
//First Idea:
//Just the basic concept of BST...

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root || root.val === val) return root;

  let ans = null;
  if (root.val < val) ans = searchBST(root.right, val);
  else ans = searchBST(root.left, val);
  return ans;
};

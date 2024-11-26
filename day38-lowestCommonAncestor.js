//First Idea:
//...How to do bottom-up checking ?
//Oh,,, u can return something to pass value from buttom to up.
//Question:236. Lowest Common Ancestor of a Binary Tree
//Elegant Solu:https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solutions/65372/javascript-solution

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root == p || root == q) return root;
  const leftSub = lowestCommonAncestor(root.left, p, q);
  const rightSub = lowestCommonAncestor(root.right, p, q);

  //Four condition: null / p / q / lowest parent node of p&q
  return leftSub && rightSub ? root : leftSub || rightSub;
};

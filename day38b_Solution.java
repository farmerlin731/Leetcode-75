/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;

        TreeNode rightDes = lowestCommonAncestor(root.right, p, q);
        TreeNode leftDes = lowestCommonAncestor(root.left, p, q);

        //It means p & q are in the different side from root.
        if (rightDes != null && leftDes != null) return root;

        return rightDes == null ? leftDes : rightDes;
    }
}
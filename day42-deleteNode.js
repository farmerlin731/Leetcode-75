//450. Delete Node in a BST
//First Idea:
//Similar question of previous one..
//Move the node with closet number?
//Oh,, -> https://leetcode.com/problems/delete-node-in-a-bst/solutions/1590815/javasscript-clean-easy-to-understand-heavily-commented-solution
//But the solution can be better!
//Note: u should keep the moved leaf's parend node and modify the ref of child.
//Oh,, it's wrong, some situation would be more complicated XD.

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;

  if (root.val === key) {
    if (!root.left && !root.right) return null;
    else if (!root.left) return root.right;
    else if (!root.right) return root.left;
    else {
      let cur = root.right;
      while (cur.left) cur = cur.left;
      cur.left = root.left;
      return root.right;
    }
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }

  return root;
};

//First Idea:
//Using BFS, and set an additional index for layer?
//2-d array?
//Oh,, u can use a counter to catch the size of each layer!
//Oh,, u can also use DFS th achieve it: https://leetcode.com/problems/binary-tree-right-side-view/solutions/549960/javascript-52ms-dfs

//199. Binary Tree Right Side View

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
 * @return {number[]}
 */
var rightSideViewBFS = function (root) {
  if (!root) return [];
  const queue = [root];
  const ans = [];
  let size = queue.length;

  while (queue.length != 0) {
    const node = queue.shift();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    size--;
    if (size == 0) {
      size = queue.length;
      ans.push(node.val);
    }
  }
  return ans;
};

var rightSideViewDFS = function (root) {
  const ans = [];
  function helper(node, layer) {
    if (!node) return;
    ans[layer] = node.val;
    helper(node.left, layer + 1);
    helper(node.right, layer + 1);
  }
  helper(root, 0);
  return ans;
};

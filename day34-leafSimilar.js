//First Idea:
//DFS + Post-Order, when children r both null, push the value into arr.
//872. Leaf-Similar Trees

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const leaf1 = [];
  const leaf2 = [];

  helper(root1, leaf1);
  helper(root2, leaf2);

  return leaf1.toString() == leaf2.toString();

  function helper(node, arr) {
    if (!node) return node;
    const left = helper(node.left, arr);
    const right = helper(node.right, arr);
    if (!left && !right) arr.push(node.val);
    return node.val;
  }
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//Create 'Test-Data' by myself.
function creatTree(depth) {
  if (depth == 0) return null;
  const val = ~~(Math.random() * 20);
  const root = new TreeNode(val);
  root.left = creatTree(depth - 1);
  root.right = creatTree(depth - 1);
  return root;
}

//Dreadth-First-Tree-Traversal
function DFTT(root) {
  const preOrder = (node, arr) => {
    if (node == null) return;
    arr.push(node.val);
    preOrder(node.left, arr);
    preOrder(node.right, arr);
  };
  const result = [];
  preOrder(root, result);
  return result;
}

const ans = [];
function helper(node, arr) {
  if (!node) return node;
  const left = helper(node.left, arr);
  const right = helper(node.right, arr);
  //   (left || right) ?? ans.push(node.val);
  if (!left && !right) {
    console.log("left", left);
    console.log("right", right);
    console.log(node.val);
    ans.push(node.val);
  }
  return node.val;
}

const head = creatTree(3);

console.log(head);
console.log(DFTT(head));
helper(head, ans);
console.log(ans.toString());

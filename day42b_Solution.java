class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
    }
}

public class Main {

    public TreeNode deleteNode(TreeNode root, int key) {
        if (root == null) return null;

        if (root.val < key) {
            root.right = deleteNode(root.right, key);
        } else if (root.val > key) {
            root.left = deleteNode(root.left, key);
        } else {
            if (root.left == null) return root.right;
            if (root.right == null) return root.left;
            //Method 1
            TreeNode minNode = findMin(root.right);
            minNode.left = root.left;
            return root.right;
            //Method 2
//            TreeNode minNode = findMin(root.right);
//            root.val = minNode.val; // 用右子樹最小值替換
//            root.right = deleteNode(root.right, minNode.val); // 刪掉右子樹的那個最小節點
        }

        return root;
    }

    private TreeNode findMin(TreeNode node) {
        while (node.left != null) node = node.left;
        return node;
    }

    // === 測試 ===
    public static void main(String[] args) {
        /*
                初始 BST：
                    5
                   / \
                  3   6
                 / \   \
                2   4   7

            刪除 key = 3 後：
                    5
                   / \
                  4   6
                 /     \
                2       7
        */
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(6);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.right.right = new TreeNode(7);

        Main solver = new Main();
        TreeNode result = solver.deleteNode(root, 3);

        System.out.print("刪除後中序遍歷結果: ");
        inorderPrint(result);  // 預期輸出：2 4 5 6 7
    }

    private static void inorderPrint(TreeNode node) {
        if (node == null) return;
        inorderPrint(node.left);
        System.out.print(node.val + " ");
        inorderPrint(node.right);
    }
}

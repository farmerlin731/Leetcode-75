import java.util.ArrayList;
import java.util.List;

class TreeNode {
    int val;
    TreeNode left, right;

    TreeNode(int val) {
        this.val = val;
    }
}

public class Main {

    public static boolean leafSimilar(TreeNode root1, TreeNode root2) {
        List<Integer> leaves1 = new ArrayList<>();
        List<Integer> leaves2 = new ArrayList<>();
        dfs(root1, leaves1);
        dfs(root2, leaves2);

        return leaves1.equals(leaves2);
    }

    // helper
    private static void dfs(TreeNode node, List<Integer> leaves) {
        if (node == null) return;
        if (node.left == null && node.right == null) leaves.add(node.val);

        dfs(node.left, leaves);
        dfs(node.right, leaves);
    }

    // 測試主程式
    public static void main(String[] args) {
        // 建立 Tree 1
        TreeNode root1 = new TreeNode(3);
        root1.left = new TreeNode(5);
        root1.right = new TreeNode(1);
        root1.left.left = new TreeNode(6);
        root1.left.right = new TreeNode(2);
        root1.left.right.left = new TreeNode(7);
        root1.left.right.right = new TreeNode(4);
        root1.right.left = new TreeNode(9);
        root1.right.right = new TreeNode(8);

        // 建立 Tree 2
        TreeNode root2 = new TreeNode(3);
        root2.left = new TreeNode(5);
        root2.right = new TreeNode(1);
        root2.left.left = new TreeNode(6);
        root2.right.left = new TreeNode(7);
        root2.right.right = new TreeNode(4);
        root2.right.left.left = new TreeNode(9);
        root2.right.left.right = new TreeNode(8);

        System.out.println("Output: " + leafSimilar(root1, root2)); // true

        // 測資 2: 不同葉子
        TreeNode a = new TreeNode(1);
        a.left = new TreeNode(2);
        a.right = new TreeNode(3);

        TreeNode b = new TreeNode(1);
        b.left = new TreeNode(3);
        b.right = new TreeNode(2);

        System.out.println("Output: " + leafSimilar(a, b));
        ArrayList<Integer> tmp = new ArrayList<>();
        tmp.add(5);
        tmp.add(7);
        tmp.add(-3);
        System.out.println(tmp);
        // false
    }
}

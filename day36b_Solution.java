 public int pathSum(TreeNode root, int targetSum) {
    Map<Long, Integer> prefixSumCount = new HashMap<>();
    prefixSumCount.put(0L, 1);
    return dfs(root, 0, targetSum, prefixSumCount);
}

private int dfs(TreeNode node, long preSum, int targetSum, Map<Long, Integer> prefixSumCount) {

    if (node == null) return 0;

    long curSum = preSum + node.val;
    int count = prefixSumCount.getOrDefault(curSum - targetSum, 0);
    prefixSumCount.put(curSum, prefixSumCount.getOrDefault(curSum, 0) + 1);
    count += dfs(node.left, curSum, targetSum, prefixSumCount);
    count += dfs(node.right, curSum, targetSum, prefixSumCount);
    prefixSumCount.put(curSum, prefixSumCount.get(curSum) - 1);

    return count;
}
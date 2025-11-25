class Solution {
    public int tribonacci(int n) {
        //edge case
        if (n == 0) return 0;
        if (n == 1 || n == 2) return 1;

        //dynamic programing
        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 1;

        //Oh,,, u can just use three variables instead of array.
        //I will try it next time.
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
        }
        return dp[n];
    }
}
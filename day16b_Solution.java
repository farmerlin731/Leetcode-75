public static int longestOnes(int[] nums, int k) {
    int slow = 0, fast = 0;
    int zeroCount = 0;
    int maxLen = 0;

    while (fast < nums.length) {
        if (nums[fast] == 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            if (nums[slow++] == 0) {
                zeroCount--;
            }
        }
        maxLen = Math.max(maxLen, fast - slow + 1);
        fast++;
    }
    
    return maxLen;
}
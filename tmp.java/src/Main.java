public class Main {

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

    // 測試
    public static void main(String[] args) {
        int[] nums1 = {1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0};
        int k1 = 2;
        System.out.println("測資1 => " + longestOnes(nums1, k1)); // 預期輸出 6

        int[] nums2 = {0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1};
        int k2 = 3;
        System.out.println("測資2 => " + longestOnes(nums2, k2)); // 預期輸出 10

        int[] nums3 = {1, 1, 1, 1, 1};
        int k3 = 1;
        System.out.println("測資3 => " + longestOnes(nums3, k3)); // 預期輸出 5
    }
}

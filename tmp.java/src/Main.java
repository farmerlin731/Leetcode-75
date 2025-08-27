public class Main {

    public static int largestAltitude(int[] gain) {
        int tmp = 0;
        int max = 0;

        for (int x : gain) {
            tmp += x;
            max = Math.max(max, tmp);
        }

        return max;
    }

    // 測試
    public static void main(String[] args) {
        int[] nums1 = {1, 1, 0, 1};
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

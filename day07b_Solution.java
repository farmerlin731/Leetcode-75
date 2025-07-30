class Solution {
    public static boolean increasingTriplet(int[] nums) {
        int min = Integer.MAX_VALUE;
        int middle = Integer.MAX_VALUE;
        for (int num : nums) {
            if (num <= min) {
                min = num;
            } else if (num <= middle) {
                middle = num;
            } else {
                return true;
            }
        }
        return false;
    }
}
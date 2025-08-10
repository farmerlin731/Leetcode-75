public void moveZeroes(int[] nums) {
    int lastNonZero = 0;

    for (int num : nums) {
        if (num != 0) {
            nums[lastNonZero++] = num;
        }
    }

    while (lastNonZero < nums.length) {
        nums[lastNonZero++] = 0;
    }
}
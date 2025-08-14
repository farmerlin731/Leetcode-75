public int maxArea(int[] height) {
    int left = 0;
    int right = height.length - 1;
    int maxArea = 0;

    while (left < right) {
        int tmpHeight = Math.min(height[left], height[right]);
        int tmpArea = tmpHeight * (right - left);
        maxArea = Math.max(maxArea, tmpArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
public static int largestAltitude(int[] gain) {
    int tmp = 0;
    int max = 0;

    for (int x : gain) {
        tmp += x;
        max = Math.max(max, tmp);
    }

    return max;
}
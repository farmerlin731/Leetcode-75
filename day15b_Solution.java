public static int maxVowels(String s, int k) {
    int n = s.length();
    int maxCount = 0, count = 0;

    for (int i = 0; i < k; i++) {
        if (isVowel(s.charAt(i))) {
            count++;
        }
    }

    maxCount = count;
    for (int i = k; i < n; i++) {
        if (isVowel(s.charAt(i))) {
            count++;
        }

        if (isVowel(s.charAt(i - k))) {
            count--;
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}

private static boolean isVowel(char c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}
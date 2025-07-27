public class Solution{
    public String reverseVowels(String s) {
        int left = 0;
        int right = s.length() - 1;
        char[] charS = s.toCharArray();
        while (left < right) {
            if (left < right && !isVowel(charS[left])) {
                left++;
            }
            if (left < right && !isVowel(charS[right])) {
                right--;
            }
            if (left < right) {
                swap(charS, left, right);
                left++;
                right--;
            }
        }
        return new String(charS);
    }

    private boolean isVowel(char c) {
        return "aeiouAEIOU".indexOf(c) != -1;
    }

    private void swap(char[] str, int i, int j) {
        char tmp = str[i];
        str[i] = str[j];
        str[j] = tmp;
    }
}
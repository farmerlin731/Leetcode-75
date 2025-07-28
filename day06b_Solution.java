class Solution {
    public static String reverseWords(String s) {
        String[] tmp = s.trim().split("\\s+");
        Collections.reverse(Arrays.asList(tmp));
        return String.join(" ", tmp);
    }
}
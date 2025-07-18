class Solution {
    public String mergeAlternately(String word1, String word2) {
        
        StringBuilder result = new StringBuilder();
        int i = 0;
        int l1 = word1.length();
        int l2 = word2.length();

        while (i < l1 && i < l2) {
            result.append(word1.charAt(i)).append(word2.charAt(i));
            i++;
        }

        if (i < l1) {
            result.append(word1.substring(i));
        } else if (i < l2) {
            result.append(word2.substring(i));
        }

        return result.toString();
    }
}
public boolean isSubsequence(String s, String t) {
    int indexS = 0;
    for (int i = 0; indexS < s.length() && i < t.length(); i++) {
        if (s.charAt(indexS) == t.charAt(i)) indexS++;
    }
    return indexS == s.length();
}
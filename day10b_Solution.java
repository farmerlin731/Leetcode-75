public int compress(char[] chars) {
    int length = chars.length;
    int write = 0;
    int groupStart = 0;

    for (int i = 0; i < length; i++) {
        if (i == length - 1 || chars[i] != chars[i + 1]) {
            chars[write++] = chars[i];
            int groupLength = i - groupStart + 1;
            if (groupLength > 1) {
                for (char c : Integer.toString(groupLength).toCharArray()) {
                    chars[write++] = c;
                }
            }
            groupStart = i + 1;
        }
    }

    return write;
}
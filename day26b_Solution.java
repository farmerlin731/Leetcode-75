public static String decodeString(String s) {
    StringBuilder current = new StringBuilder();
    Deque<Integer> countStack = new ArrayDeque<>();
    Deque<StringBuilder> stringStack = new ArrayDeque<>();
    int k = 0;

    for (char c : s.toCharArray()) {
        if (Character.isDigit(c)) {
            k = k * 10 + (c - '0');
        } else if (c == '[') {
            stringStack.push(current);
            countStack.push(k);
            current = new StringBuilder();
            k = 0;
        } else if (c == ']') {
            int count = countStack.pop();
            StringBuilder preDecode = stringStack.pop();
            preDecode.append(current.toString().repeat(count));
            current = preDecode;
        } else {
            current.append(c);
        }
    }


    return current.toString();
}
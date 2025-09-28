public static String removeStars(String s) {
    // for new commit @ 0928
    Deque<Character> stack = new ArrayDeque<>();
    for (char c : s.toCharArray()) {
        if (c == '*') {
            if (!stack.isEmpty()) stack.pollLast();
        } else {
            stack.addLast(c);
        }
    }

    // Transfer to string.
    StringBuilder sb = new StringBuilder();
    for (char c : stack) {
        sb.append(c);
    }
    
        return sb.toString();
    }
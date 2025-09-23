public static int[] asteroidCollision(int[] asteroids) {
    Deque<Integer> stack = new ArrayDeque<>();

    for (int as : asteroids) {
        boolean isAlive = true;
        //when collision occur
        while (isAlive && as < 0 && !stack.isEmpty() && stack.peekLast() > 0) {
            int top = stack.peekLast();
            if (as + top < 0) {
                stack.pollLast();
            } else if (as + top == 0) {
                stack.pollLast();
                isAlive = false;
            } else {
                isAlive = false;
            }
        }

        if (isAlive) stack.offerLast(as);
    }

    int n = stack.size();
    int[] res = new int[n];
    int i = 0;
    for (int as : stack) res[i++] = as;

    return res;
}
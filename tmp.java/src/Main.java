import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class Main {

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


    // 小工具：印出 int[]（方便測試）
    private static void printArr(int[] arr) {
        System.out.println(Arrays.toString(arr));
    }

    // 測試 main
    public static void main(String[] args) {
        int[] t1 = {5, 10, -5};
        int[] t2 = {8, -8};
        int[] t3 = {10, 2, -5};
        int[] t4 = {-2, -1, 1, 2};
        int[] t5 = {1, -2, -2};
        int[] t6 = {2, -1, 1, -2}; // 混合更多情況

        System.out.print("Input: " + Arrays.toString(t1) + " -> Output: ");
        printArr(asteroidCollision(t1)); // [5,10]
        System.out.print("Input: " + Arrays.toString(t2) + " -> Output: ");
        printArr(asteroidCollision(t2)); // []
        System.out.print("Input: " + Arrays.toString(t3) + " -> Output: ");
        printArr(asteroidCollision(t3)); // [10]
        System.out.print("Input: " + Arrays.toString(t4) + " -> Output: ");
        printArr(asteroidCollision(t4)); // [-2,-1,1,2]
        System.out.print("Input: " + Arrays.toString(t5) + " -> Output: ");
        printArr(asteroidCollision(t5)); // [-2,-2] or depends? -> expect [-2,-2]
        System.out.print("Input: " + Arrays.toString(t6) + " -> Output: ");
        printArr(asteroidCollision(t6));
    }
}

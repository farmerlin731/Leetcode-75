import java.util.*;

public class Main {
    public static boolean uniqueOccurrences(int[] arr) {

        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : arr) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }


        Set<Integer> freqSet = new HashSet<>(freqMap.values());

        return freqMap.size() == freqSet.size();
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 2, 2, 1, 1, 3};
        System.out.println(Arrays.toString(arr1) + " -> " + uniqueOccurrences(arr1));
        // 頻率: {1:3, 2:2, 3:1} -> 唯一 -> true

        int[] arr2 = {1, 2};
        System.out.println(Arrays.toString(arr2) + " -> " + uniqueOccurrences(arr2));
        // 頻率: {1:1, 2:1} -> 不唯一 -> false

        int[] arr3 = {-3, 0, 1, -3, 1, 1, 1, -3, 10, 0};
        System.out.println(Arrays.toString(arr3) + " -> " + uniqueOccurrences(arr3));
        // 頻率: {-3:3, 0:2, 1:4, 10:1} -> 唯一 -> true
    }
}

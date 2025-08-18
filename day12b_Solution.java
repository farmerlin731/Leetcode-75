public static int maxOperations(int[] nums, int k) {
    
    HashMap<Integer, Integer> map = new HashMap<>();
    int count = 0;
    
    for (int num : nums) {
        int comple = k - num;
        if (map.getOrDefault(comple, 0) > 0) {
            count++;
            map.put(comple, map.get(comple) - 1);
        } else {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
    }

    return count;
}
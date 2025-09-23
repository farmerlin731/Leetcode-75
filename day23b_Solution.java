public int equalPairs(int[][] grid) {
    Map<String, Integer> rowMap = new HashMap<>();
    //Create row map
    for (int[] ints : grid) {
        StringBuilder sb = new StringBuilder();
        for (int num : ints) {
            sb.append(num).append(',');
        }

        String key = sb.toString();

        rowMap.put(key, rowMap.getOrDefault(key, 0) + 1);
    }

    //Check column
    int count = 0;
    for (int j = 0; j < grid[0].length; j++) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < grid.length; i++) {
            sb.append(grid[i][j]).append(',');
        }
        String key = sb.toString();

        if (rowMap.containsKey(key)) {
            count += rowMap.get(key);
        }
    }

    return count;
}
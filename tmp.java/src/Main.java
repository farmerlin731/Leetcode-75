import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int equalPairs(int[][] grid) {
        int n = grid.length;
        int count = 0;

        // 方法1: 直接比較每一行與每一列
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (isEqual(grid, i, j)) {
                    count++;
                }
            }
        }

        return count;
    }

    // 檢查第 row 行是否等於第 col 列
    private boolean isEqual(int[][] grid, int row, int col) {
        int n = grid.length;
        for (int i = 0; i < n; i++) {
            if (grid[row][i] != grid[i][col]) {
                return false;
            }
        }
        return true;
    }

    // 方法2: 使用 HashMap 優化 (更高效的解法)
    public int equalPairsOptimized(int[][] grid) {
        int n = grid.length;
        Map<String, Integer> rowMap = new HashMap<>();

        // 將每一行轉換為字串並計數
        for (int i = 0; i < n; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < n; j++) {
                sb.append(grid[i][j]).append(",");
            }
            String rowStr = sb.toString();
            rowMap.put(rowStr, rowMap.getOrDefault(rowStr, 0) + 1);
        }

        int count = 0;
        // 檢查每一列是否與某行相等
        for (int j = 0; j < n; j++) {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < n; i++) {
                sb.append(grid[i][j]).append(",");
            }
            String colStr = sb.toString();
            count += rowMap.getOrDefault(colStr, 0);
        }

        return count;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // 測試案例 1
        int[][] grid1 = {{3, 2, 1}, {1, 7, 6}, {2, 7, 7}};
        System.out.println("測試案例 1:");
        System.out.println("輸入: [[3,2,1],[1,7,6],[2,7,7]]");
        System.out.println("方法1結果: " + solution.equalPairs(grid1));
        System.out.println("方法2結果: " + solution.equalPairsOptimized(grid1));
        System.out.println("預期輸出: 1");
        System.out.println();

        // 測試案例 2
        int[][] grid2 = {{3, 1, 2, 2}, {1, 4, 4, 5}, {2, 4, 2, 2}, {2, 4, 2, 2}};
        System.out.println("測試案例 2:");
        System.out.println("輸入: [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]");
        System.out.println("方法1結果: " + solution.equalPairs(grid2));
        System.out.println("方法2結果: " + solution.equalPairsOptimized(grid2));
        System.out.println("預期輸出: 3");
        System.out.println();

        // 測試案例 3
        int[][] grid3 = {{11, 1}, {1, 11}};
        System.out.println("測試案例 3:");
        System.out.println("輸入: [[11,1],[1,11]]");
        System.out.println("方法1結果: " + solution.equalPairs(grid3));
        System.out.println("方法2結果: " + solution.equalPairsOptimized(grid3));
        System.out.println("預期輸出: 2");
        System.out.println();

        // 測試案例 4 - 邊界情況
        int[][] grid4 = {{1}};
        System.out.println("測試案例 4 (邊界情況):");
        System.out.println("輸入: [[1]]");
        System.out.println("方法1結果: " + solution.equalPairs(grid4));
        System.out.println("方法2結果: " + solution.equalPairsOptimized(grid4));
        System.out.println("預期輸出: 1");
        System.out.println();

        // 測試案例 5 - 無相等配對
        int[][] grid5 = {{1, 2}, {3, 4}};
        System.out.println("測試案例 5 (無相等配對):");
        System.out.println("輸入: [[1,2],[3,4]]");
        System.out.println("方法1結果: " + solution.equalPairs(grid5));
        System.out.println("方法2結果: " + solution.equalPairsOptimized(grid5));
        System.out.println("預期輸出: 0");
    }
}
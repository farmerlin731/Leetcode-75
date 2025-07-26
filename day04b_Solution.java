public class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {
        if (n == 0) return true;

        int index = 0;
        int len = flowerbed.length;

        while (index < len && n > 0) {
            // 當前不為 0 或左邊或右邊不是 0，就跳過
            if (flowerbed[index] == 1 ||
                (index > 0 && flowerbed[index - 1] == 1) ||
                (index < len - 1 && flowerbed[index + 1] == 1)) {
                index++;
                continue;
            }

            // 可以種花
            n--;
            flowerbed[index] = 1; // 實際種花
            index += 2;           // 下一格也不能種
        }

        return n == 0;
    }
}
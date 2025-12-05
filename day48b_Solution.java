public int nearestExit(char[][] maze, int[] entrance) {
    int rows = maze.length;
    int cols = maze[0].length;

    Queue<int[]> queue = new LinkedList<>();
    queue.offer(new int[]{entrance[0], entrance[1], 0}); // r, c, steps

    boolean[][] visited = new boolean[rows][cols];
    visited[entrance[0]][entrance[1]] = true;

    int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    while (!queue.isEmpty()) {
        int[] cur = queue.poll();
        int r = cur[0], c = cur[1], steps = cur[2];

        for (int[] d : dirs) {
            int nr = r + d[0];
            int nc = c + d[1];

            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
            if (maze[nr][nc] == '+' || visited[nr][nc]) continue;

            // 出口條件：在邊界且不是入口
            if ((nr == 0 || nr == rows - 1 || nc == 0 || nc == cols - 1)
                    && !(nr == entrance[0] && nc == entrance[1])) {
                return steps + 1;
            }

            visited[nr][nc] = true;
            queue.offer(new int[]{nr, nc, steps + 1});
        }
    }

    return -1;
}
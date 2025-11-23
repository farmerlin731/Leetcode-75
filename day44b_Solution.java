public int findCircleNum(int[][] isConnected) {

    boolean[] visited = new boolean[isConnected.length];

    int count = 0;
    for (int i = 0; i < isConnected.length; i++) {
        if (!visited[i]) {
            dfs(i, isConnected, visited);
            count++;
        }
    }

    return count;
}

private void dfs(int curCity, int[][] isConnected, boolean[] visited) {
    visited[curCity] = true;

    for (int j = 0; j < isConnected.length; j++) {
        if (isConnected[curCity][j] == 1 && !visited[j]) dfs(j, isConnected, visited);
    }
}
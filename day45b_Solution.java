class Solution {
    public int minReorder(int n, int[][] connections) {
        // adjacency list: store pair (neighbor, needsReorder)
        List<List<int[]>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        for (int[] edge : connections) {
            int start = edge[0];
            int end = edge[1];

            //'0' means the direction is opposited, need add counter.
            graph.get(start).add(new int[]{end, 0});
            graph.get(end).add(new int[]{start, 1});
        }

        boolean[] visited = new boolean[n];
        return dfs(0, graph, visited);
    }

    private int dfs(int node, List<List<int[]>> graph, boolean[] visited) {
        visited[node] = true;
        int count = 0;
        List<int[]> neighbors = graph.get(node);
        for (int[] n : neighbors) {
            int linkedNode = n[0];
            int direction = n[1];
            if (!visited[linkedNode]) {
                if (direction == 0) count++;
                count += dfs(linkedNode, graph, visited);
            }
        }
        return count;
    }
}
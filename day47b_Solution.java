class Solution {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {

        //Build graph.
        Map<String, List<Node>> graph = new HashMap<>();
        for (int i = 0; i < equations.size(); i++) {
            String nodeA = equations.get(i).get(0);
            String nodeB = equations.get(i).get(1);

            graph.putIfAbsent(nodeA, new ArrayList<>());
            graph.putIfAbsent(nodeB, new ArrayList<>());

            graph.get(nodeA).add(new Node(nodeB, values[i]));
            graph.get(nodeB).add(new Node(nodeA, 1 / values[i]));
        }


        //Calculate the multiple of path value.
        //First u should think about edge case.
        double[] result = new double[queries.size()];

        for (int i = 0; i < queries.size(); i++) {
            String start = queries.get(i).getFirst();
            String end = queries.get(i).getLast();
            if (!graph.containsKey(start) || !graph.containsKey(end)) {
                result[i] = -1.0;
            } else if (start.equals(end)) {
                result[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                result[i] = dfs(start, end, 1.0, visited, graph);
            }
        }

        return result;
    }

    // DFS: return product if path found, otherwise -1.0
    private double dfs(String cur, String target, double product, Set<String> visited,
                       Map<String, List<Node>> graph) {

        //Find the path.
        if (cur.equals(target)) return product;

        visited.add(cur);
        List<Node> neighbors = graph.get(cur);

        for (Node nei : neighbors) {
            if (visited.contains(nei.var)) continue;
            double result = dfs(nei.var, target, product * nei.value, visited, graph);
            if (result != -1.0) return result;
        }

        return -1.0;
    }

    // Helper class
    static class Node {
        String var;
        double value;

        Node(String var, double value) {
            this.var = var;
            this.value = value;
        }
    }
}
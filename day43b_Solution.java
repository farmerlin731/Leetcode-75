import java.util.*;

public class Main {
    public boolean canVisitAllRoomsBFS(List<List<Integer>> rooms) {
        boolean[] visited = new boolean[rooms.size()];

        //BFS Version
        Deque<Integer> queue = new ArrayDeque<>();

        //Note: u should add count when u put key
        //And change the flag of visited at the same time.
        queue.offer(0);
        int count = 1;
        visited[0] = true;

        while (!queue.isEmpty()) {
            int curRoom = queue.poll();

            List<Integer> keys = rooms.get(curRoom);
            for (int key : keys) {
                if (!visited[key]) {
                    queue.offer(key);
                    count++;
                    visited[key] = true;
                }
            }
        }

        return count == rooms.size();
    }


    public boolean canVisitAllRoomsDFS(List<List<Integer>> rooms) {
        boolean[] visited = new boolean[rooms.size()];

        //DFS Version
        dfs(0, rooms, visited);

        for (boolean v : visited) {
            if (!v) return false;
        }

        return true;
    }

    private void dfs(int room, List<List<Integer>> rooms, boolean[] visited) {
        visited[room] = true;
        for (int key : rooms.get(room)) {
            if (!visited[key]) dfs(key, rooms, visited);
        }
    }

    // === 測試 ===
    public static void main(String[] args) {
        Main solver = new Main();

        // 測試 1: 所有房間都能訪問
        List<List<Integer>> rooms1 = new ArrayList<>();
        rooms1.add(Arrays.asList(1));
        rooms1.add(Arrays.asList(2));
        rooms1.add(Arrays.asList(3));
        rooms1.add(new ArrayList<>());
        System.out.println("測試1結果: " + solver.canVisitAllRooms(rooms1)); // 預期 true

        // 測試 2: 有房間無法訪問
        List<List<Integer>> rooms2 = new ArrayList<>();
        rooms2.add(Arrays.asList(1, 3));
        rooms2.add(Arrays.asList(3, 0, 1));
        rooms2.add(Arrays.asList(2));
        rooms2.add(Arrays.asList(0));
        System.out.println("測試2結果: " + solver.canVisitAllRooms(rooms2)); // 預期 false
    }
}

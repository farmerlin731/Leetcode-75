class RecentCounter {
    private Deque<Integer> queue;

    public RecentCounter() {
        this.queue = new ArrayDeque<>();
    }

    public int ping(int t) {
        queue.addLast(t);
        while (queue.peekFirst() < t - 3000) queue.removeFirst();
        return queue.size();
    }
}
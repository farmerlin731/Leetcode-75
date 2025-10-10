public static String predictPartyVictory(String senate) {
    Deque<Integer> radiant = new ArrayDeque<>();
    Deque<Integer> dire = new ArrayDeque<>();
    int n = senate.length();

    // construct dequeue
    for (int i = 0; i < n; i++) {
        if (senate.charAt(i) == 'R') {
            radiant.offer(i);
        } else {
            dire.offer(i);
        }
    }
    
    // ban another side
    while (!radiant.isEmpty() && !dire.isEmpty()) {
        int rIndex = radiant.pollFirst();
        int dIndex = dire.pollFirst();
        if (rIndex < dIndex) {
            radiant.offer(rIndex + n);
        } else {
            dire.offer(dIndex + n);
        }
    }

    return radiant.isEmpty() ? "Dire" : "Radiant";
}
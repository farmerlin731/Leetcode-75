public static int pairSum(ListNode head) {
    //find the right part head (after reverse)
    ListNode slow = head;
    ListNode fast = head;
    while (fast != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    ListNode rightPart = reverseList(slow);
    ListNode leftPart = head;
    int maxSum = 0;

    while (rightPart != null) {
        int sum = leftPart.val + rightPart.val;
        maxSum = Math.max(sum, maxSum);
        leftPart = leftPart.next;
        rightPart = rightPart.next;
    }
    
    return maxSum;
}

//reverse

private static ListNode reverseList(ListNode node) {
    if (node == null || node.next == null) return node;
    ListNode newHead = reverseList(node.next);
    node.next.next = node;
    node.next = null;
    return newHead;
}
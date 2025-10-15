public static ListNode deleteMiddle(ListNode head) {
    // if there is only one node, the list will be empty.
    if (head == null || head.next == null) return null;

    ListNode pre = null;
    ListNode slow = head;
    ListNode fast = head;

    while (fast != null && fast.next != null) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // 'slow' is the deleted point
    pre.next = slow.next;

    return head;
}
public static ListNode oddEvenList(ListNode head) {
    if (head == null || head.next == null) return head;

    ListNode oriEven = head.next;
    ListNode curOdd = head;
    ListNode curEven = head.next;

    while (curEven != null && curEven.next != null) {
        curOdd.next = curEven.next;
        curOdd = curOdd.next;
        curEven.next = curOdd.next;
        curEven = curEven.next;
    }

    curOdd.next = oriEven;
    return head;
}
class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
    }
}

public class Main {
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

    // 輔助方法：印出鏈結串列
    public static void printList(ListNode head) {
        ListNode curr = head;
        while (curr != null) {
            System.out.print(curr.val);
            if (curr.next != null) System.out.print(" -> ");
            curr = curr.next;
        }
        System.out.println();
    }

    // 測試用 main
    public static void main(String[] args) {
        // 建立測試資料：1 -> 3 -> 4 -> 7 -> 1 -> 2 -> 6
        ListNode head = new ListNode(1);
        head.next = new ListNode(3);
        head.next.next = new ListNode(4);
        head.next.next.next = new ListNode(7);
        head.next.next.next.next = new ListNode(1);
        head.next.next.next.next.next = new ListNode(2);
        head.next.next.next.next.next.next = new ListNode(6);

        System.out.println("原始串列：");
        printList(head);

        head = deleteMiddle(head);

        System.out.println("刪除中間節點後：");
        printList(head);
    }
}

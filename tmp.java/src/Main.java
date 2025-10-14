class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
    }
}

public class Main {
    public static ListNode reverseList(ListNode head) {
        //By Recursion
        if (head == null || head.next == null) return head;

        ListNode cur = head;
        ListNode newHead = reverseList(cur.next);
        //The first node to be executed is the second to last node
        cur.next.next = cur;
        //Need to execute this line, otherwise there is error at original head.
        cur.next = null;
        return newHead;
    }

    // ===== 測試用 main =====
    public static void main(String[] args) {
        // 建立測試用鏈結串列: 1 -> 2 -> 3 -> 4 -> 5
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        System.out.println("原始串列：");
        printList(head);

        // 執行反轉
        ListNode reversed = reverseList(head);

        System.out.println("反轉後串列：");
        printList(reversed);
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
}

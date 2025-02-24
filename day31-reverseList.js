/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head;
  let bucket = null;
  while (cur != null) {
    [cur.next, cur, bucket] = [bucket, cur.next, cur];
  }
  return bucket;
};

//Solution from leetcode, it's beautiful!
//https://leetcode.com/problems/reverse-linked-list/solutions/869957/javascript-iterative-and-recursive-solution
var reverseListByRecursion = function (head) {
  if (!head || !head.next) return head;
  reversedPart = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedPart;
};

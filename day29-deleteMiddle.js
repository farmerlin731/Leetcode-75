//First Idea:
//Oh,, the hint about speed *2 is fascinating!

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
var deleteMiddle = function (head) {
  let cur = head;
  let pilot = head;
  let pre = null;

  while (pilot && pilot?.next) {
    pre = cur;
    cur = cur.next;
    pilot = pilot.next.next;
  }

  //The edge case: the length of list is 1.
  if (cur == pilot) return null;

  pre.next = cur.next;

  return head;
};

//Constructor
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//For self-testing
function printList(head) {
  const result = [];
  let now = head;

  while (now != null) {
    result.push(now.val);
    now = now.next;
  }
  console.log(result);
}

//TEST DATA
let head = new ListNode(1);
let nodeA = new ListNode(2);
let nodeB = new ListNode(4);
let nodeC = new ListNode(7);
let nodeD = new ListNode(10);
head.next = nodeA;
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

printList(head);
printList(deleteMiddle(head));
// printList(reverseList(head));

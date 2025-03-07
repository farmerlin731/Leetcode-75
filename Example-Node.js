//Concept:
//Create the bucket, and clearify the logic of order.

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

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
head.next = nodeA;
nodeA.next = nodeB;
nodeB.next = nodeC;

printList(head);
// printList(reverseList(head));

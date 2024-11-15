//First Idea:
//Reverse the second half, so u can combine the twins at same step.
//Maybe use the recursion version, u don't need to reverse it actually?
//The solution with array is funny...
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let leftHead = head;
  let rightHead = findMiddle(head);
  let maxSum = 0;
  helper(rightHead);

  return maxSum;

  function helper(node) {
    if (node.next) helper(node.next);
    maxSum = Math.max(maxSum, node.val + leftHead.val);
    leftHead = leftHead.next;
  }

  function findMiddle(head) {
    let fast = (slow = head);
    while (fast) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
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
let nodeB = new ListNode(10);
let nodeC = new ListNode(7);
head.next = nodeA;
nodeA.next = nodeB;
nodeB.next = nodeC;

printList(head);
// printList(reverseList(head));

// console.log(findMiddle(head));
console.log(pairSum(head));

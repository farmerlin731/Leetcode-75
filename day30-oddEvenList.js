//First Idea:
//Create a new head for even nodes?
//Oh yes.. the 'curEven' is reduntant!

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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  const evenHead = head.next;
  let curOdd = head;
  let curEven = evenHead;

  while (curOdd.next?.next) {
    curOdd.next = curOdd.next.next;
    curOdd = curOdd.next;
    curEven.next = curOdd.next;
    curEven = curEven.next;
  }

  curOdd.next = evenHead;
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
let nodeE = new ListNode(13);
let nodeF = new ListNode(77);
head.next = nodeA;
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;
nodeE.next = nodeF;

let singleHead = new ListNode(66);
printList(head);
printList(oddEvenList(head));
printList(oddEvenList(singleHead));
printList(oddEvenList(null));

var oddEvenListFromLeetcode = function (head) {
  if (!head) return head;

  var odd = head;
  var even = head.next;
  while (odd.next && odd.next.next) {
    var tmp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    tmp.next = odd.next;
  }
  odd.next = even;
  return head;
};

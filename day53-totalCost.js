//2462. Total Cost to Hire K Workers
//First Idea:
//Create two min-heap, from head & from tail.
//Judge which one is smaller, and catch new element into heap!
//Should we need to concern the index?
//Oh,, we can simplify it !
//Solu: https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3683715/javascript-shortest-possible-solution-4-lines-with-comments-minpriorityqueue

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */

//This version for leetcode website.
var totalCost = function (costs, k, candidates) {
  let ans = 0;
  let head = 0,
    tail = costs.length - 1,
    max = 1e5 + 1;

  const leftHeap = new MinPriorityQueue();
  const rightHeap = new MinPriorityQueue();
  leftHeap.enqueue(max), rightHeap.enqueue(max); //At least one element in each heap!

  for (let i = 0; i < k; i++) {
    while (leftHeap.size() <= candidates && head <= tail)
      leftHeap.enqueue(costs[head++]);
    while (rightHeap.size() <= candidates && head <= tail)
      rightHeap.enqueue(costs[tail--]);

    ans += (
      leftHeap.front().element <= rightHeap.front().element
        ? leftHeap
        : rightHeap
    ).dequeue().element;
  }

  return ans;
};

//The following code is for local-test.
const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

let costs = [1, 2, 4, 1],
  k = 3,
  candidates = 3;
// let costs = [17, 12, 10, 2, 7, 2, 11, 20, 8],
//   k = 3,
//   candidates = 4;

let ans = 0;
let head = 0,
  tail = costs.length - 1,
  max = 1e5 + 1;

const leftHeap = new MinPriorityQueue();
const rightHeap = new MinPriorityQueue();
leftHeap.enqueue(max), rightHeap.enqueue(max); //At least one element in each heap!

for (let i = 0; i < k; i++) {
  while (leftHeap.size() <= candidates && head <= tail)
    leftHeap.enqueue(costs[head++]);
  while (rightHeap.size() <= candidates && head <= tail)
    rightHeap.enqueue(costs[tail--]);

  let tmp = (
    leftHeap.front() <= rightHeap.front() ? leftHeap : rightHeap
  ).dequeue();
  console.log(tmp);

  ans += tmp;
}

console.log(ans);

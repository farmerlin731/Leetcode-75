//215. Kth Largest Element in an Array
//First Idea:
//If u just want to find kth largest, u can use heap.

const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

var findKthLargestLocal = function (nums, k) {
  const minHeap = new MaxPriorityQueue((x) => x[0]);
  nums.forEach((num, i) => minHeap.enqueue([num, i]));
  let heapNode;
  for (let i = 0; i < k; i++) {
    heapNode = minHeap.dequeue();
  }
  return heapNode[0];
};

//https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/1628620/javascript-215-kth-largest-element-in-an-array
var findKthLargestFromLeetcode = (nums, k, pq = new MinPriorityQueue()) => {
  for (let x of nums) pq.enqueue(x), pq.size() > k && pq.dequeue();
  return pq.front().element;
};

let nums = [3, 2, 1, 5, 6, 4],
  k = 3;

console.log(findKthLargestLocal(nums, k));

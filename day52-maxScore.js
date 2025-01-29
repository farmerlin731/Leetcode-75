//2542. Maximum Subsequence Score
//Even though i know the method is priority queue, still have no idea... Q_Q
//Solu from Leetcode: https://leetcode.com/problems/maximum-subsequence-score/solutions/3557264/heap-python-js-solution
//Greedy? Very cool!

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

var maxScore = function (nums1, nums2, k) {
  const mergeArr = Array(nums1.length);

  for (let i = 0; i < nums1.length; i++) {
    mergeArr[i] = [nums2[i], nums1[i]];
  }

  // console.log(mergeArr);

  mergeArr.sort((a, b) => b[0] - a[0]);

  // console.log(mergeArr);

  const minHeap = new MinPriorityQueue((x) => x);

  let maxValue = 0;
  let tmpTotal = 0;

  mergeArr.forEach(([num2, num1]) => {
    if (minHeap.size() == k) {
      tmpTotal -= minHeap.dequeue();
    }

    tmpTotal += num1;
    minHeap.enqueue(num1);

    if (minHeap.size() == k) {
      maxValue = Math.max(maxValue, tmpTotal * num2);
    }
  });

  return maxValue;
};

let nums1 = [1, 3, 3, 2],
  nums2 = [2, 1, 3, 4],
  k = 3;

// let nums1 = [4, 2, 3, 1, 1],
//   nums2 = [7, 5, 10, 9, 6],
//   k = 1;

console.log(maxScore(nums1, nums2, k));

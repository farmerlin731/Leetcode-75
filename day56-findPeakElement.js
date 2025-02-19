//162. Find Peak Element
//First Idea:
//O(logn) -> no iteration, use binary search ?
//But how to compare with the neightbor Q_Q
//Leetcode Solu:https://leetcode.com/problems/find-peak-element/solutions/692986/javascript-simple-binary-and-linear-search

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// let nums = [1, 2, 3, 1];
let nums = [1, 2, 1, 3, 5, 6, 4];

console.log(findPeakElement(nums));

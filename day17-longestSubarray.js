//First Idea:
//Like the previos one, set the k = 1.
//And need to consider another edge case: all elements are 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  if (nums.length == 1 || nums.indexOf(0) == -1) {
    return nums.length - 1;
  }

  let k = 1;
  let slow = (fast = 0);

  while (fast < nums.length) {
    if (!nums[fast]) k--;
    if (k < 0) {
      if (nums[slow] == 0) k++;
      slow++;
    }
    fast++;
  }

  return fast - slow - 1;
};

let nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];

// console.log(`fast:${fast}`);
// console.log(`slow:${slow}`);
// console.log(fast - slow - 1);

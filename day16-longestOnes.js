//First Idea: Sliding Window.
//Key words for sliding window: 'substring' / 'contiguous' / 'consecutive'
//If 'fast' get 0, then 'slow' need to move to the next of 0.
//How to write elegantly Q_Q
//The solution from leetcode is awesome!

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let fast = (slow = 0);
  let numOfZero = nums[0] ? 0 : 1;
  let maxLength = 0;

  while (fast < nums.length) {
    // console.log(`fast - ${fast} : ${nums[fast]}`);
    // console.log(`count : ${numOfZero}`);
    while (numOfZero > k) {
      if (!nums[slow]) numOfZero--;
      slow++;
      //   console.log(`slow- ${slow} : ${nums[slow]}`);
    }

    fast++;
    maxLength = Math.max(maxLength, fast - slow);
    if (!nums[fast]) numOfZero++;
  }

  return maxLength;
};

var longestOnesFromLeetcode = function (A, K) {
  let left = 0,
    right = 0;

  while (right < A.length) {
    if (A[right] === 0) K--;
    if (K < 0) {
      if (A[left] === 0) K++;
      left++;
    }
    right++;
  }
  return right - left;
};

// let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
//   k = 2;
let nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  k = 3;

console.log(longestOnes(nums, k));

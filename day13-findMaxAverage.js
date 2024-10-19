//First Idea:
//An easy example for 'sliding window'.
//When window moves, minor the previous one, and plus the new one.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let preSum = nums.slice(0, k).reduce((acc, cur) => acc + cur);
  let max = preSum;

  for (let i = 1; i <= nums.length - k; i++) {
    let curSum = preSum - nums[i - 1] + nums[i + k - 1];
    max = Math.max(max, curSum);
    preSum = curSum;
  }

  return max / k;
};

let nums = [1, 12, -5, -6, 50, 3],
  k = 4;

console.log(findMaxAverage(nums, k));

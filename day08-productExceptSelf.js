//First Idea:
//No division!
//Set two arrays, multiply elements from left & from right.
//Multiple two elements in the same position, it's the answer! :)

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelfOri = function (nums) {
  let result = Array(nums.length);

  result[0] = 1;
  for (let i = 1; i < result.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = result.length - 1; i >= 0; i--) {
    result[i] *= right;
    if (result[i] == -0) result[i] = 0;
    right *= nums[i];
  }
  return result;
};

var productExceptSelf = function (nums) {};

let nums = [1, 2, 3, 4];

const multiFromLeft = Array(nums.length);
const multiFromRigt = Array(nums.length);

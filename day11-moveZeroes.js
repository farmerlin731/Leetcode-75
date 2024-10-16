//First Idea:
//Use 'two-pointer', slower one for the index of zero
//When the faster one achieve non-zero, swap the element to the slower one.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = (fast = 0);

  while (fast < nums.length) {
    while (nums[slow] != 0 && slow < nums.length) slow++;
    if (slow == nums.length) break;
    if (nums[fast] != 0 && fast > slow) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
    }
    fast++;
  }
};

let nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));
console.log(nums);

//First Idea:
//Compute the sum.
//Move the index, right part minor the num[index] and left part add the num[index-1] ?

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let rightTotal = nums.reduce((a, c) => a + c, 0);
  let leftTotal = 0;
  for (let i = 0; i < nums.length; i++) {
    rightTotal -= nums[i];
    if (rightTotal == leftTotal) return i;
    leftTotal += nums[i];
  }
  return -1;
};

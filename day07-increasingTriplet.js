//First Idea:
//Iterate the array, set the variable of min & middle.
//Update the min & middle when meet the smaller one, if someone is bigger than middle, return true.
//My answer is the same as the one from LeetCode :)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let min = (middle = Infinity);

  for (const num of nums) {
    if (num < min) {
      min = num;
    } else if (num > min && num < middle) {
      middle = num;
    } else if (num > middle) {
      return true;
    }
  }
  return false;
};

let nums = [2, 1, 5, 0, 4, 6];

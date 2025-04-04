//198. House Robber
//First Idea:
//If u want to rub the Nth house, u can't choose "N-1"th house.
//Use Dp, Pick the bigger one between "N-2" & "N-3".

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);
  if (nums.length == 3) return Math.max(nums[0] + nums[2], nums[1]);

  const ans = Array(nums.length).fill(0);
  [ans[0], ans[1], ans[2]] = [nums[0], nums[1], nums[0] + nums[2]];

  for (let i = 3; i < nums.length; i++) {
    ans[i] = Math.max(ans[i - 2], ans[i - 3]) + nums[i];
  }

  return Math.max(ans.at(-1), ans.at(-2));
};

var robFromLeetcode = function (nums) {
  const n = nums.length;

  if (n === 1) {
    return nums[0];
  }

  const dp = Array(n).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[n - 1];
};

const nums = [2, 7, 9, 3, 1];
console.log(rob(nums));

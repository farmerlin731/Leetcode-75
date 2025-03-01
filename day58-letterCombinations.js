//17. Letter Combinations of a Phone Number
//First Idea:
//Permutation? Backtracking?
//It's east to count total number...
//But it's hard to show all candidates ?
//Leetcode Solu: https://leetcode.com/problems/letter-combinations-of-a-phone-number/solutions/139447/clean-javascript-solution-backtracking

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length == 0) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const ans = [];
  helper(0, "");
  return ans;

  function helper(index, string) {
    if (index == digits.length) {
      ans.push(string);
      return;
    }

    for (const char of map[digits[index]]) {
      helper(index + 1, string + char);
    }
  }
};

let digits = "2";

console.log(ans);

//First Idea:
//Consider the length of str1, find the factor, and check if it can devide the str2?
//Oh,, the first check is gorgeous! ->   if (str1 + str2 !== str2 + str1) return '';
//https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/306165/1071-javascript-solution-3-lines-95-runtime-100-memory-usage

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  const gcd = (x, y) => (y == 0 ? x : gcd(y, x % y));
  return str1.slice(0, gcd(str1.length, str2.length));
};

// let str1 = "ABCABC",
//   str2 = "ABC";

let str1 = "LEET",
  str2 = "CODE";

console.log(gcdOfStrings(str1, str2));

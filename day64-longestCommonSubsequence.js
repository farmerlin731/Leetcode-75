//1143. Longest Common Subsequence
//First Idea:
//2-dim array, the axis is these two string.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dpArr = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill(0)
  );

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] == text2[j - 1]) {
        console.log("i:", i, ",j:", j);

        console.log("in condition", text1[i]), text2[j];

        dpArr[i][j] = dpArr[i - 1][j - 1] + 1;
      } else {
        dpArr[i][j] = Math.max(dpArr[i - 1][j], dpArr[i][j - 1]);
      }
    }
  }

  console.log(dpArr);

  return dpArr[text1.length][text2.length];
};

let text1 = "abcde",
  text2 = "ace";

// let text1 = "abc",
//   text2 = "def";

console.log(longestCommonSubsequence(text1, text2));

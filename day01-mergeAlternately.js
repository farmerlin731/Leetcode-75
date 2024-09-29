//First Idea:
//Set index, and concat the rest string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const minLength = Math.min(word1.length, word2.length);
  let result = "";
  for (let i = 0; i < minLength; i++) {
    result += word1[i] + word2[i];
  }

  result += word1.slice(minLength) + word2.slice(minLength);
  return result;
};

const mergeAlternatelyFromLeetcode = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    result += (a[i] ?? "") + (b[i] ?? "");
  }

  return result;
};

let word1 = "abcd",
  word2 = "pq";

console.log(mergeAlternately(word1, word2));

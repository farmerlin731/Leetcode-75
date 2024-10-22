//First Idea: Sliding Window.
//Key words for sliding window: 'substring' / 'contiguous' / 'consecutive'

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) count++;
  }

  let max = count;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (vowels.has(s[i - k])) count--;
    max = Math.max(max, count);
    if (max === k) break;
  }

  return max;
};

// let s = "abciiidef",
//   k = 3;

// let s = "aeiou",
//   k = 2;

let s = "a",
  k = 1;
console.log(maxVowels(s, k));

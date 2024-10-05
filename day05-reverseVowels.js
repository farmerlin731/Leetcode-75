//First Idea:
//Maybe use two pointer (head&tail), u can iterate only once ?
//this idea: https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/2449971/typescript-beats-100-two-pointers
//more fancy: https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3646561/the-shortest-solution

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {};

var reverseVowelsFancySolu = function (s) {
  const vow = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, (el) => vow.pop());
};

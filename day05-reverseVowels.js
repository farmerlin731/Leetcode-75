//First Idea:
//Maybe use two pointer (head&tail), u can iterate only once ?
//this idea: https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/2449971/typescript-beats-100-two-pointers
//more fancy: https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3646561/the-shortest-solution

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowelsSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  const sArr = [...s];
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (!vowelsSet.has(sArr[left])) left++;
    if (!vowelsSet.has(sArr[right])) right--;
    if (vowelsSet.has(sArr[left]) && vowelsSet.has(sArr[right])) {
      [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
      left++;
      right--;
    }
  }
  return sArr.join("");
};

var reverseVowelsFancySolu = function (s) {
  const vow = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, (el) => vow.pop());
};

let s = "IceCreAm";

console.log(reverseVowels(s));

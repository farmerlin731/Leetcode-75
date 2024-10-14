/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequenceOri = function (s, t) {
  s = [...s];
  for (let i = 0; i < t.length; i++) {
    if (t[i] == s[0]) s.shift();
  }
  return s.length == 0;
};

var isSubsequence = function (s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (t[j] == s[i]) i++;
  }
  return i == s.length;
};

let s = "abc",
  t = "ahbgdc";

console.log(isSubsequence(s, t));

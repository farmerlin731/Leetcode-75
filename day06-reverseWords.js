//First Idea:
//USe high-order functions in JS can fullfill it easily.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(" ").filter(Boolean).reverse().join(" ");
};

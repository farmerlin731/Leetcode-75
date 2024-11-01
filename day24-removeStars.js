//First Idea:
//Oh.. the tip is "stack".
//Iterate the string, when u get '*', remove the last char.

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const result = [];
  [...s].forEach((char) => {
    if (char === "*") result.pop();
    else result.push(char);
  });
  return result.join("");
};

let s = "leet**cod*e";
// let s = "erase*****";

console.log(removeStars(s));

//First Idea:
//Seems like stack... but don't know how to do XD.
//Hint: Traversal the string s and push into a stack for non ']' character.

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let tmpStr = "";
  let tmpCount = 0;

  for (const char of s) {
    if (!Number.isNaN(+char)) {
      tmpCount += char;
    } else if (char == "[") {
      stack.push(tmpCount);
      stack.push(char);
      tmpCount = 0;
    } else if (char == "]") {
      tmpStr = "";
      let lastChar = stack.pop();
      while (lastChar != "[") {
        tmpStr = lastChar + tmpStr;
        lastChar = stack.pop();
      }

      let count = stack.pop();
      stack.push(tmpStr.repeat(count));
    } else {
      stack.push(char);
    }
  }
  //   console.log("stack", stack);
  return stack.join("");
};

// let s = "3[a]2[bc]";
// let s = "3[a2[c]]";
let s = "2[abc]3[cd]ef";

console.log(decodeString(s));

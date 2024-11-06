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

  for (const char of s) {
    if (char != "]") {
      stack.push(char);
    } else {
      tmpStr = "";
      let lastChar = stack.pop();
      while (lastChar != "[") {
        tmpStr = lastChar + tmpStr;
        lastChar = stack.pop();
      }

      let count = stack.pop();
      for (let i = 0; i < count; i++) {
        stack.push(tmpStr);
      }
    }
  }
  return stack.join("");
};

// let s = "3[a]2[bc]";
// let s = "3[a2[c]]";
let s = "2[abc]3[cd]ef";

const stack = [];
let tmpStr = "";

for (const char of s) {
  if (char != "]") {
    stack.push(char);
  } else {
    tmpStr = "";
    let lastChar = stack.pop();
    while (lastChar != "[") {
      tmpStr = lastChar + tmpStr;
      lastChar = stack.pop();
    }
    // console.log("tmpStr", tmpStr);

    let count = stack.pop();
    for (let i = 0; i < count; i++) {
      stack.push(tmpStr);
      //   console.log(tmpStr);
    }
    // console.log(stack);
  }
}

console.log(decodeString(s));

//First Idea:
//Iterate the input, compute the each count of elements.
//Use 'string' to record the answer, and then transfer to 'array' finally.

/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function (chars) {
  let result = "";
  let alpha = "";
  let count = 0;

  for (let i = 0; i <= chars.length; i++) {
    const char = chars[i];
    if (char == alpha) {
      count++;
    } else {
      count == 1 && (result += alpha);
      count > 1 && (result += alpha + count);
      count = 1;
      alpha = char;
    }
  }

  chars.length = 0;
  chars.push(...result.split(""));
  return chars.length;
};

var compressFromSolu = function (chars) {
  if (!chars.length) return 0;
  let j = 0;
  let cur = chars[0];
  let counter = 0;
  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === cur) {
      counter++;
    } else {
      chars[j] = cur;
      if (counter > 1) {
        const s = counter.toString();
        for (let k = 0; k < s.length; k++) chars[++j] = s[k];
      }
      j++;
      cur = chars[i];
      counter = 1;
    }
  }
  chars.length = j;
  return j;
};

let chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];

console.log(compress(chars));
console.log(chars);

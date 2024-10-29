//First Idea:
//Create a hashmap, just count every the number of alphabet, sort it, check if they r the same?
//1657. Determine if Two Strings Are Close

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  const map1 = createMap(word1);
  const map2 = createMap(word2);

  return (
    arrSortedKeys(map1) === arrSortedKeys(map2) &&
    arrSortedValues(map1) === arrSortedValues(map2)
  );

  function createMap(word) {
    const ans = [...word].reduce((map, char) => {
      map.set(char, (map.get(char) || 0) + 1);
      return map;
    }, new Map());
    return ans;
  }

  function arrSortedKeys(map) {
    return [...map.keys()].sort().toString();
  }

  function arrSortedValues(map) {
    return [...map.values()].sort().toString();
  }
};

let word1 = "cabbba",
  word2 = "abbccc";

// let word1 = "a",
//   word2 = "aa";

// const map1 = helper(word1);
// const map2 = helper(word2);

// function helper(word) {
//   const ans = [...word].reduce((map, char) => {
//     map.set(char, (map.get(char) || 0) + 1);
//     return map;
//   }, new Map());
//   return ans;
// }

// console.log(map1);
// console.log(map2);
// const counter1 = [...map1.values()].sort().toString();

// console.log(counter1);

console.log(closeStrings(word1, word2));

//First Idea:
//Use map to count the occurence of elements.
//And use 'Set' to check if the occurences are unique.
//1207. Unique Number of Occurrences

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const occur = new Map();

  arr.forEach((e) => {
    occur.set(e, (occur.get(e) || 0) + 1);
  });

  const set = new Set([...occur.values()]);
  return occur.size === set.size;
};

// let arr = [1, 2, 2, 1, 1, 3];
// let arr = [1, 2];
let arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];

console.log(uniqueOccurrences(arr));

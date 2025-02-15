//2300. Successful Pairs of Spells and Potions
//Brute Force: O(n*m)
//First Idea: Sort them first? O(nlogn) + O(mlogm) ?
//By binary search: O(nlogm) + O(mlogm) ?
//This part is for binary search... take this first XD

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const pairs = Array(spells.length).fill(0);

  potions.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    let left = 0,
      right = potions.length - 1;

    while (left <= right) {
      let mid = (left + right) >> 1;
      if (spells[i] * potions[mid] >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    pairs[i] = potions.length - left;
  }

  return pairs;
};

// let spells = [5, 1, 3],
//   potions = [1, 2, 3, 4, 5],
//   success = 7;

let spells = [3, 1, 2],
  potions = [8, 5, 8],
  success = 16;

console.log(successfulPairs(spells, potions, success));

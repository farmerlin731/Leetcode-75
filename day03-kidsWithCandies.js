//First Idea:
//Pick the max.. and check the elements if be smaller than 'max - extra'...
//Test the familiarity of high-order functions..

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const threshold = Math.max(...candies) - extraCandies;

  return candies.map((e) => e >= threshold);
};

// let candies = [2, 3, 5, 1, 3],
//   extraCandies = 3;

let candies = [4, 2, 1, 1, 2],
  extraCandies = 1;
console.log(kidsWithCandies(candies, extraCandies));

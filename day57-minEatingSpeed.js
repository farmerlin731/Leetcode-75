//875. Koko Eating Bananas
//First Idea:
//Binary Search? Maybe...The right side is the max of piles?
//Solution: https://leetcode.com/problems/koko-eating-bananas/solutions/1703427/javascript-binary-search-explainedhttps://leetcode.com/problems/koko-eating-bananas/solutions/1703427/javascript-binary-search-explained

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const consumeTime = (count) =>
    piles.reduce((sum, cur) => sum + Math.ceil(cur / count), 0);

  let left = 0,
    right = Math.max(...piles),
    mid;

  while (left < right) {
    mid = (left + right) >> 1;
    if (consumeTime(mid) > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

// const consumeTime =

// let piles = [30, 11, 23, 4, 20],
//   h = 5;

let piles = [3, 6, 7, 11],
  h = 8;

console.log(left);

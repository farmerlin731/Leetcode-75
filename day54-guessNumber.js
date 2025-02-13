//374. Guess Number Higher or Lower
//

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let hit = false;
  let left = 1,
    right = n,
    cur;

  while (!hit) {
    cur = ~~((left + right) / 2);
    if (guess(cur) == -1) {
      right = cur - 1;
    } else if (guess(cur) == 1) {
      left = cur + 1;
    } else {
      hit = true;
    }
  }

  return cur;
};

const guessNumberFromLeetcode = (right) => {
  let left = 1;
  while (true) {
    const mid = ((left + right) / 2) << 0;
    const result = guess(mid);
    if (result === 0) return mid;
    result === 1 ? (left = mid + 1) : (right = mid - 1);
  }
};

let n = 10,
  pick = 6;

function guess(num) {
  return num > pick ? -1 : num < pick ? 1 : 0;
}

console.log(guessNumber(n));

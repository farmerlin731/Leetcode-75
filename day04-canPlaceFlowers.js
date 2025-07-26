//First Idea:
//Iterate the array, check if the position can be put a flower?
//SoluA: https://leetcode.com/problems/can-place-flowers/solutions/292300/no-need-to-mutate-array-c-99-6-c-99-6-javascript-100
//SoluB: https://leetcode.com/problems/can-place-flowers/solutions/501184/javascript-solution-easy-1-pass

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n == 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i]) {
      i++;
      continue;
    }
    if (flowerbed[i + 1]) continue;
    n--;
    if (n == 0) {
      return true;
    }
    i++;
  }
  return false;
};

var canPlaceFlowersSoluA = function (flowerbed, n) {
  let current = 0;
  const size = flowerbed.length;
  for (var i = 0; i <= size; i++) {
    if (i < size && flowerbed[i] == 0) {
      current++;
      if (i == 0) current++;
      if (i == size - 1) current++;
    } else {
      n -= Math.trunc((current - 1) / 2);
      if (n <= 0) return true;
      current = 0;
    }
  }
  return false;
};

var canPlaceFlowers0726 = function (flowerbed, n) {
  if (n == 0) return true;
  let index = 0;

  while (index < flowerbed.length && n > 0) {
    if (flowerbed[index] || flowerbed[index + 1] || flowerbed[index - 1]) {
      index++;
      continue;
    }

    n--;
    index += 2;
  }

  return n == 0 ? true : false;
};

let flowerbed = [1, 0, 0, 0, 1],
  n = 2;

console.log(canPlaceFlowers0726(flowerbed, n));

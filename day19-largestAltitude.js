//1732. Find the Highest Altitude
//First Idea:
//Iterate it... and catch the max sum...

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let max = (sum = 0);

  gain.forEach((num) => {
    sum += num;
    max = sum > max ? sum : max;
  });
  return max;
};

let gain = [-4, -3, -2, -1, 4, 3, 2];
console.log(largestAltitude(gain));

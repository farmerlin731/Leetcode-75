/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  while (right > left) {
    let minHeight = Math.min(height[right], height[left]);
    result = Math.max((right - left) * minHeight, result);
    if (height[right] < height[left]) {
      right--;
    } else {
      left++;
    }
  }
  return result;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));

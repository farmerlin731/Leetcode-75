//First Idea:
//Like the question 'two-sum'.
//The value of dictionary should be array.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const dict = {};
  let result = 0;

  for (const num of nums) {
    const comple = k - num;
    if (dict[comple] > 0) {
      dict[comple]--;
      result++;
      continue;
    }

    dict[num] = (dict[num] || 0) + 1;
  }
  //   console.log(dict);
  return result;
};

let nums = [1, 2, 3, 4],
  k = 5;

// let nums = [3, 1, 3, 4, 3],
//   k = 6;

console.log(maxOperations(nums, k));

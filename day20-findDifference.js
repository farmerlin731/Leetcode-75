//First Idea:
//Distinct -> use 'Set'
//2215. Find the Difference of Two Arrays
//Elegant solu: https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/1901024/javascript-whatever-another-array-has-just-delete-them

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const ans = [[], []];
  for (const item of set1) {
    if (!set2.has(item)) ans[0].push(item);
  }

  for (const item of set2) {
    if (!set1.has(item)) ans[1].push(item);
  }

  return ans;
};

const findDifferenceFromLeetcode = (a, b) => {
  a = new Set(a);
  b = new Set(b);
  a.forEach((i) => b.delete(i) && a.delete(i));
  return [[...a], [...b]];
};

// let nums1 = [1, 2, 3],
//   nums2 = [2, 4, 6];

console.log(findDifference(nums1, nums2));

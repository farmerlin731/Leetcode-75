//746. Min Cost Climbing Stairs
//First Idea:
//DP -> Create a table, compute the min-cost when u reach the table.

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dpTable = Array(cost.length + 1).fill(0);
  for (let i = 2; i < dpTable.length; i++) {
    dpTable[i] = Math.min(
      dpTable[i - 1] + cost[i - 1],
      dpTable[i - 2] + cost[i - 2]
    );
  }
  return dpTable.at(-1);
};

// const cost = [10, 15, 20];
const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(cost));

//714. Best Time to Buy and Sell Stock with Transaction Fee
//First Idea:
//2-d dp.. i have no idea Q_Q
//solution: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/1656786/javascript-clean-dp-solution-with-comments/?envType=study-plan-v2&envId=leetcode-75
//Oh,, got it ,, u don't need to consider the 'gap', just need to consider the price of 'buy' & 'sell'.

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

var maxProfit = function (prices, fee) {
  let dp = Array(prices.length)
    .fill()
    .map((v) => Array(2).fill(-1));

  const traverse = (index, isHeld) => {
    if (index >= prices.length) return 0;
    if (dp[index][isHeld] !== -1) return dp[index][isHeld];

    let profit = 0;
    //IF ALREADY HOLDING STOCK
    if (isHeld) {
      //KEEP HOLDING IT
      profit = Math.max(profit, traverse(index + 1, 1));

      //SELL IF PRICE IS LOW THAN PROFIT
      profit = Math.max(profit, prices[index] - fee + traverse(index + 1, 0));
    } else {
      //DONT BUY
      profit = Math.max(profit, traverse(index + 1, 0));

      //BUY
      profit = Math.max(profit, traverse(index + 1, 1) - prices[index]);
    }
    dp[index][isHeld] = profit;
    return profit;
  };

  return traverse(0, 0);
};

//More intuitional!
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/?envType=study-plan-v2&envId=leetcode-75
//A little modified! :)
var maxProfit2nd = function (prices, fee) {
  let d_ik0 = 0;
  let d_ik1 = -Infinity; //genious!

  for (let i = 0; i < prices.length; i++) {
    // 0 or 1 means if u have the stock at the end of the day!!
    d_ik0 = Math.max(d_ik0, d_ik1 + prices[i] - fee);
    d_ik1 = Math.max(d_ik1, d_ik0 - prices[i]);
  }
  return d_ik0;
};

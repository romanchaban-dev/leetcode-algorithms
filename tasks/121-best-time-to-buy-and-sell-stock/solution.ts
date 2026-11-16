// LeetCode 121: Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices: Array<number>): number => {
  let action = prices[0];

  let bestIncome = 0;

  for (let day = 1; day < prices.length; day++) {
    const income = prices[day] - action;

    if (prices[day] < action) {
      action = prices[day];
    }

    if (income > bestIncome) {
      bestIncome = income;
    }
  }

  return bestIncome;
};

// Time: O(n)
// Space: O(1)

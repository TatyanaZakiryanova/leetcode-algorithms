// Best time to buy and sell stock

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// easy
// Return the maximum profit

// O(n)
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      const profit = prices[i] - minPrice;
      maxProfit = Math.max(maxProfit, profit);
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5

// minPrice is the best price to buy before today
// prices[i] - minPrice is the maximum profit if you sell today

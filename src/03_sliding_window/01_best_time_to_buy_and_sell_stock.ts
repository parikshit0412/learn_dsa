/**
 * Problem: #121 - Best Time to Buy and Sell Stock (Easy)
 * LeetCode Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different
 * day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * Strategy: Single Pass / Sliding Window Tracking Minimum Buy Price
 * - Maintain lowest purchase price seen so far.
 * - At each new day, calculate potential profit (`price - minPrice`) and update `maxProfit`.
 * 
 * Time Complexity: O(n) - Single pass through the prices array.
 * Space Complexity: O(1) - Constant auxiliary space.
 */

export function maxProfit(prices: number[]): number {
  // Track the minimum buying price seen up to the current day
  let minPrice = Infinity;
  // Track the highest profit achievable
  let maxProfitVal = 0;

  // Traverse through each day's stock price
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    // If we find a lower price, update our minimum buying point
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else {
      // Otherwise, calculate the profit if sold today and update maximum profit
      const currentProfit = currentPrice - minPrice;
      maxProfitVal = Math.max(maxProfitVal, currentProfit);
    }
  }

  // Return the maximum profit found (defaults to 0 if all prices decrease)
  return maxProfitVal;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const prices1 = [7, 1, 5, 3, 6, 4];
  console.log('Max Profit (Test 1):', maxProfit(prices1)); // Expected: 5 (buy at 1, sell at 6)

  const prices2 = [7, 6, 4, 3, 1];
  console.log('Max Profit (Test 2):', maxProfit(prices2)); // Expected: 0
}

"""
Problem: #121 - Best Time to Buy and Sell Stock (Easy)
LeetCode Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different
day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Strategy: Single Pass Tracking Minimum Buy Price
- Maintain lowest purchase price seen so far.
- At each new day, calculate potential profit (`price - min_price`) and update `max_profit`.

Time Complexity: O(n) - Single pass through the prices array.
Space Complexity: O(1) - Constant auxiliary space.
"""
from typing import List


def max_profit(prices: List[int]) -> int:
    """
    Finds the maximum profit from buying and selling a single stock once.
    """
    min_price = float("inf")
    max_profit_val = 0

    for current_price in prices:
        if current_price < min_price:
            min_price = current_price
        else:
            current_profit = current_price - min_price
            max_profit_val = max(max_profit_val, current_profit)

    return int(max_profit_val)


# Alias for camelCase
maxProfit = max_profit


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    prices1 = [7, 1, 5, 3, 6, 4]
    print("Max Profit (Test 1):", max_profit(prices1))  # Expected: 5 (buy at 1, sell at 6)

    prices2 = [7, 6, 4, 3, 1]
    print("Max Profit (Test 2):", max_profit(prices2))  # Expected: 0


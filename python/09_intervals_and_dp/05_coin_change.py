"""
Problem: #322 - Coin Change (Medium)
LeetCode Link: https://leetcode.com/problems/coin-change/

You are given an integer array `coins` representing coins of different denominations and
an integer `amount` representing a total amount of money.
Return the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Strategy: Bottom-Up Dynamic Programming (Tabulation)
- `dp[a]` stores minimum coins needed to make amount `a`.
- Base Case: `dp[0] = 0` (0 coins to make amount 0).
- Initialize `dp` array filled with `amount + 1` (representing infinity).
- For each sub-amount `a` from 1 to `amount`:
  For each coin in `coins`:
    If `a - coin >= 0`:
      `dp[a] = min(dp[a], 1 + dp[a - coin])`

Time Complexity: O(amount * n) - Where n is number of coin denominations.
Space Complexity: O(amount) - 1D DP table of size amount + 1.
"""
from typing import List


def coin_change(coins: List[int], amount: int) -> int:
    """
    Computes fewest coins needed to make amount, or -1 if impossible.
    """
    if amount == 0:
        return 0

    # dp[i] stores minimum coins to make sum i
    # Fill with amount + 1 (impossible upper bound)
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0

    for a in range(1, amount + 1):
        for coin in coins:
            if a - coin >= 0:
                dp[a] = min(dp[a], 1 + dp[a - coin])

    return -1 if dp[amount] > amount else dp[amount]


# Alias for camelCase
coinChange = coin_change


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    coins1 = [1, 2, 5]
    amount1 = 11
    print("Coin Change (Test 1):", coin_change(coins1, amount1))  # Expected: 3 (5 + 5 + 1)

    coins2 = [2]
    amount2 = 3
    print("Coin Change (Test 2):", coin_change(coins2, amount2))  # Expected: -1

    coins3 = [1]
    amount3 = 0
    print("Coin Change (Test 3):", coin_change(coins3, amount3))  # Expected: 0


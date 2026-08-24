/**
 * Problem: #322 - Coin Change (Medium)
 * LeetCode Link: https://leetcode.com/problems/coin-change/
 * 
 * You are given an integer array `coins` representing coins of different denominations and
 * an integer `amount` representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 * 
 * Strategy: Bottom-Up Dynamic Programming (Tabulation)
 * - `dp[a]` stores the minimum coins needed to make amount `a`.
 * - Base Case: `dp[0] = 0` (0 coins to make amount 0).
 * - Initialize `dp` array filled with `Infinity` (or `amount + 1`).
 * - For each sub-amount `a` from 1 to `amount`:
 *   For each coin in `coins`:
 *     If `a - coin >= 0`:
 *       `dp[a] = min(dp[a], 1 + dp[a - coin])`
 * 
 * Time Complexity: O(amount * n) - Where n is number of coin denominations.
 * Space Complexity: O(amount) - 1D DP table of size amount + 1.
 */

export function coinChange(coins: number[], amount: number): number {
  // If amount is 0, no coins are required
  if (amount === 0) {
    return 0;
  }

  // dp[i] stores minimum coins to make sum i
  // Fill with amount + 1 (an impossible upper bound, equivalent to Infinity)
  const dp: number[] = new Array(amount + 1).fill(amount + 1);

  // Base case: 0 coins needed to make amount 0
  dp[0] = 0;

  // Build solutions for all sub-amounts from 1 to target amount
  for (let a = 1; a <= amount; a++) {
    for (let c = 0; c < coins.length; c++) {
      const coin = coins[c];

      // Check if current coin can contribute to amount a
      if (a - coin >= 0) {
        dp[a] = Math.min(dp[a], 1 + dp[a - coin]);
      }
    }
  }

  // If dp[amount] was never updated from its initial value, amount cannot be made
  return dp[amount] > amount ? -1 : dp[amount];
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const coins1 = [1, 2, 5];
  const amount1 = 11;
  console.log('Coin Change (Test 1):', coinChange(coins1, amount1)); // Expected: 3 (5 + 5 + 1)

  const coins2 = [2];
  const amount2 = 3;
  console.log('Coin Change (Test 2):', coinChange(coins2, amount2)); // Expected: -1

  const coins3 = [1];
  const amount3 = 0;
  console.log('Coin Change (Test 3):', coinChange(coins3, amount3)); // Expected: 0
}

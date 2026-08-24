/**
 * Problem: #70 - Climbing Stairs (Easy)
 * LeetCode Link: https://leetcode.com/problems/climbing-stairs/
 * 
 * You are climbing a staircase. It takes `n` steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Strategy: Dynamic Programming / Fibonacci Pattern with O(1) Space
 * - Base Cases:
 *   - 1 step -> 1 way (1)
 *   - 2 steps -> 2 ways (1+1, 2)
 * - Recurrence Relation:
 *   - To reach step `i`, you either came from step `(i - 1)` with a 1-step leap,
 *     or from step `(i - 2)` with a 2-step leap.
 *   - `dp[i] = dp[i - 1] + dp[i - 2]`
 * 
 * Time Complexity: O(n) - Single loop up to n.
 * Space Complexity: O(1) - Maintaining only two previous state variables.
 */

export function climbStairs(n: number): number {
  // Base case edge checks
  if (n <= 2) {
    return n;
  }

  // `prev2` stores ways to reach (i - 2)
  let prev2 = 1;
  // `prev1` stores ways to reach (i - 1)
  let prev1 = 2;

  // Compute ways from step 3 up to step n
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    // Shift state variables forward
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  console.log('Climb Stairs (n=2):', climbStairs(2)); // Expected: 2
  console.log('Climb Stairs (n=3):', climbStairs(3)); // Expected: 3
  console.log('Climb Stairs (n=5):', climbStairs(5)); // Expected: 8
}

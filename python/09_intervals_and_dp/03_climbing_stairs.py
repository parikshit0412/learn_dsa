"""
Problem: #70 - Climbing Stairs (Easy)
LeetCode Link: https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes `n` steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Strategy: Dynamic Programming / Fibonacci Pattern with O(1) Space
- Base Cases:
  - 1 step -> 1 way (1)
  - 2 steps -> 2 ways (1+1, 2)
- Recurrence Relation:
  - To reach step `i`, you either came from step `(i - 1)` with a 1-step leap,
    or from step `(i - 2)` with a 2-step leap.
  - `dp[i] = dp[i - 1] + dp[i - 2]`

Time Complexity: O(n) - Single loop up to n.
Space Complexity: O(1) - Maintaining only two previous state variables.
"""


def climb_stairs(n: int) -> int:
    """
    Computes distinct ways to climb n stairs taking 1 or 2 steps at a time.
    """
    if n <= 2:
        return n

    # prev2 stores ways to reach (i - 2)
    prev2 = 1
    # prev1 stores ways to reach (i - 1)
    prev1 = 2

    for _ in range(3, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current

    return prev1


# Alias for camelCase
climbStairs = climb_stairs


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    print("Climb Stairs (n=2):", climb_stairs(2))  # Expected: 2
    print("Climb Stairs (n=3):", climb_stairs(3))  # Expected: 3
    print("Climb Stairs (n=5):", climb_stairs(5))  # Expected: 8


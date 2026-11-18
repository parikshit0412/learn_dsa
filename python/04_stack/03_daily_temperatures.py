"""
Problem: #739 - Daily Temperatures (Medium)
LeetCode Link: https://leetcode.com/problems/daily-temperatures/

Given an array of integers `temperatures` represents the daily temperatures, return an array `answer`
such that `answer[i]` is the number of days you have to wait after the `i-th` day to get a warmer temperature.
If there is no future day for which this is possible, keep `answer[i] == 0` instead.

Strategy: Monotonic Decreasing Stack
- We maintain a stack of INDICES whose temperatures are in decreasing order.
- For each day `i`, while `temperatures[i] > temperatures[stack.top()]`:
  We have found a warmer day for `stack.top()`!
  Pop `prev_index` from stack and record difference `i - prev_index` in `answer[prev_index]`.
- Push current index `i` onto the stack.

Time Complexity: O(n) - Each index is pushed and popped at most once.
Space Complexity: O(n) - Stack stores at most n indices in descending order.
"""
from typing import List


def daily_temperatures(temperatures: List[int]) -> List[int]:
    """
    Finds number of days until a warmer temperature for each day using a monotonic stack.
    """
    n = len(temperatures)
    answer = [0] * n
    stack: List[int] = []  # Stack of indices

    for i, current_temp in enumerate(temperatures):
        # While stack is not empty and current temperature is warmer than temperature at stack top
        while stack and current_temp > temperatures[stack[-1]]:
            prev_index = stack.pop()
            answer[prev_index] = i - prev_index

        stack.append(i)

    return answer


# Alias for camelCase
dailyTemperatures = daily_temperatures


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    temps1 = [73, 74, 75, 71, 69, 72, 76, 73]
    print("Daily Temperatures (Test 1):", daily_temperatures(temps1))
    # Expected: [1, 1, 4, 2, 1, 1, 0, 0]

    temps2 = [30, 40, 50, 60]
    print("Daily Temperatures (Test 2):", daily_temperatures(temps2))
    # Expected: [1, 1, 1, 0]


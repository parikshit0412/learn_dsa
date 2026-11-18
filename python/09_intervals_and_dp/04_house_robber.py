"""
Problem: #198 - House Robber (Medium)
LeetCode Link: https://leetcode.com/problems/house-robber/

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.
Adjacent houses have security systems connected; it will automatically contact the police if two adjacent houses
were broken into on the same night.
Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Strategy: Dynamic Programming with Constant Space
- For house `i`, there are two choices:
  1. Rob house `i`: Gain `nums[i] + max_money(i - 2)`.
  2. Skip house `i`: Gain `max_money(i - 1)`.
- State transition: `current_max = max(rob1 + num, rob2)`.

Time Complexity: O(n) - Single linear pass.
Space Complexity: O(1) - Two variables track previous maximum amounts.
"""
from typing import List


def rob(nums: List[int]) -> int:
    """
    Computes maximum money that can be robbed without alerting police.
    """
    rob1 = 0
    rob2 = 0

    for num in nums:
        current_max = max(rob1 + num, rob2)
        rob1 = rob2
        rob2 = current_max

    return rob2


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    nums1 = [1, 2, 3, 1]
    print("House Robber (Test 1):", rob(nums1))  # Expected: 4 (rob house 1 and 3)

    nums2 = [2, 7, 9, 3, 1]
    print("House Robber (Test 2):", rob(nums2))  # Expected: 12 (rob house 1, 3, 5)


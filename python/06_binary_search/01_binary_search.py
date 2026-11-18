"""
Problem: #704 - Binary Search (Easy)
LeetCode Link: https://leetcode.com/problems/binary-search/

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`,
write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Strategy: Standard Two-Pointer Binary Search
- Maintain search boundaries `low = 0`, `high = nums.length - 1`.
- Compute midpoint `mid = low + (high - low) // 2`.
- Halve the search space based on comparison between `nums[mid]` and `target`.

Time Complexity: O(log n) - Search space halved on each iteration.
Space Complexity: O(1) - Constant auxiliary space.
"""
from typing import List


def search(nums: List[int], target: int) -> int:
    """
    Performs binary search on a sorted array of integers.
    """
    low = 0
    high = len(nums) - 1

    while low <= high:
        mid = low + (high - low) // 2
        mid_val = nums[mid]

        if mid_val == target:
            return mid
        elif mid_val < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    nums1 = [-1, 0, 3, 5, 9, 12]
    print("Binary Search (target=9):", search(nums1, 9))  # Expected: 4
    print("Binary Search (target=2):", search(nums1, 2))  # Expected: -1


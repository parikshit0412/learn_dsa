"""
Problem: #11 - Container With Most Water (Medium)
LeetCode Link: https://leetcode.com/problems/container-with-most-water/

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn
such that the two endpoints of the ith line are `(i, 0)` and `(i, height[i])`.
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.

Strategy: Greedy Two Pointers
- Start with widest container (`left = 0`, `right = n - 1`).
- Calculate current area: `(right - left) * min(height[left], height[right])`.
- The limiting factor is always the shorter line. Moving the taller line can never increase the area.
  Hence, always advance the shorter line inward.

Time Complexity: O(n) - Single pass with two pointers converging.
Space Complexity: O(1) - Constant auxiliary space.
"""
from typing import List


def max_area(height: List[int]) -> int:
    """
    Finds the maximum water container area between any two vertical lines.
    """
    left = 0
    right = len(height) - 1
    max_water = 0

    while left < right:
        width = right - left
        min_height = min(height[left], height[right])
        current_area = width * min_height

        max_water = max(max_water, current_area)

        # Greedily move the pointer pointing to the shorter vertical bar
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_water


# Alias for camelCase
maxArea = max_area


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    print("Max Area (Test 1):", max_area(height1))  # Expected: 49

    height2 = [1, 1]
    print("Max Area (Test 2):", max_area(height2))  # Expected: 1


"""
Problem: #1 - Two Sum (Easy)
LeetCode Link: https://leetcode.com/problems/two-sum/

Given an array of integers `nums` and an integer `target`, return indices of the
two numbers such that they add up to `target`.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Time Complexity: O(n) - Single pass through the array
Space Complexity: O(n) - Hash map storing up to n elements
"""
from typing import List


def two_sum(nums: List[int], target: int) -> List[int]:
    """
    Finds two indices such that nums[index1] + nums[index2] == target.
    """
    # Create a Hash Map to store numbers we have seen so far as keys,
    # and their corresponding array indices as values.
    seen_map = {}

    # Iterate through the array tracking index i and current number
    for i, current_num in enumerate(nums):
        # Calculate the required complement that would sum with current_num to equal target
        complement = target - current_num

        # Check if the complement has already been recorded in our hash map
        if complement in seen_map:
            # If found, retrieve previous index of complement and return both indices
            return [seen_map[complement], i]

        # Otherwise, record current number and its index in map for future lookups
        seen_map[current_num] = i

    # If no solution found (guaranteed not to happen per problem constraints), return empty list
    return []


# Alias for camelCase
twoSum = two_sum


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    nums1 = [2, 7, 11, 15]
    target1 = 9
    print("Two Sum Result 1:", two_sum(nums1, target1))  # Expected: [0, 1]

    nums2 = [3, 2, 4]
    target2 = 6
    print("Two Sum Result 2:", two_sum(nums2, target2))  # Expected: [1, 2]


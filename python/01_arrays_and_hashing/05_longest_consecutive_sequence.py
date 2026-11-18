"""
Problem: #128 - Longest Consecutive Sequence (Medium)
LeetCode Link: https://leetcode.com/problems/longest-consecutive-sequence/

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Optimal Strategy:
1. Insert all numbers into a Set for O(1) membership checks.
2. Only start counting a sequence from `num` if `num - 1` does NOT exist in the set (indicating `num` is sequence start).
3. Count consecutive numbers `num + 1, num + 2, ...` and update `longest_streak`.

Time Complexity: O(n) - Each number is visited at most twice.
Space Complexity: O(n) - Hash set storing all unique numbers.
"""
from typing import List


def longest_consecutive(nums: List[int]) -> int:
    """
    Finds length of the longest consecutive elements sequence in O(n) time.
    """
    if not nums:
        return 0

    # Store all numbers in a HashSet for O(1) average-time lookups
    num_set = set(nums)
    longest_streak = 0

    # Iterate over each unique number in the set
    for num in num_set:
        # Check if `num` is the START of a consecutive sequence.
        # If `num - 1` exists, then `num` is not the start, so skip it.
        if num - 1 not in num_set:
            current_num = num
            current_streak = 1

            # Incrementally check for consecutive following numbers
            while current_num + 1 in num_set:
                current_num += 1
                current_streak += 1

            # Update maximum streak found so far
            longest_streak = max(longest_streak, current_streak)

    return longest_streak


# Alias for camelCase
longestConsecutive = longest_consecutive


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    nums1 = [100, 4, 200, 1, 3, 2]
    print("Longest Consecutive (Test 1):", longest_consecutive(nums1))
    # Expected: 4 (sequence: [1, 2, 3, 4])

    nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
    print("Longest Consecutive (Test 2):", longest_consecutive(nums2))
    # Expected: 9 (sequence: [0, 1, 2, 3, 4, 5, 6, 7, 8])


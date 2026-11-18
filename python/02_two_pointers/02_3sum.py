"""
Problem: #15 - 3Sum (Medium)
LeetCode Link: https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]`
such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.
Notice that the solution set must not contain duplicate triplets.

Strategy:
1. Sort the input array in ascending order.
2. Fix the first element with an outer loop `i`.
3. Use Two Pointers (`left = i + 1`, `right = n - 1`) to find pairs summing to `-nums[i]`.
4. Skip duplicates for all three pointer positions.

Time Complexity: O(n^2) - Sorting is O(n log n), two-pointer traversal takes O(n^2).
Space Complexity: O(1) or O(n) depending on Python's Timsort implementation.
"""
from typing import List


def three_sum(nums: List[int]) -> List[List[int]]:
    """
    Finds all unique triplets in the array which gives the sum of zero.
    """
    result: List[List[int]] = []
    n = len(nums)

    # Step 1: Sort the array in ascending numerical order
    nums.sort()

    # Step 2: Iterate through possible first elements of the triplet
    for i in range(n - 2):
        # If the lowest number in sorted array is > 0, three positive numbers cannot sum to 0
        if nums[i] > 0:
            break

        # Skip duplicate elements for the first position to prevent duplicate triplets
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        # Initialize two pointers for the remaining sub-array
        left = i + 1
        right = n - 1

        while left < right:
            total = nums[i] + nums[left] + nums[right]

            if total == 0:
                result.append([nums[i], nums[left], nums[right]])

                # Skip duplicates for the left pointer
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                # Skip duplicates for the right pointer
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1

                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1

    return result


# Alias for camelCase
threeSum = three_sum


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    nums1 = [-1, 0, 1, 2, -1, -4]
    print("3Sum Result 1:", three_sum(nums1))  # Expected: [[-1, -1, 2], [-1, 0, 1]]

    nums2 = [0, 1, 1]
    print("3Sum Result 2:", three_sum(nums2))  # Expected: []


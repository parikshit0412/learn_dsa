"""
Problem: #33 - Search in Rotated Sorted Array (Medium)
LeetCode Link: https://leetcode.com/problems/search-in-rotated-sorted-array/

There is an integer array `nums` sorted in ascending order (with distinct values),
which is possibly rotated at an unknown pivot index.
Given `nums` and integer `target`, return the index of `target` if it is in `nums`, or -1 if it is not.
You must achieve an algorithm with O(log n) runtime complexity.

Strategy: Modified Binary Search
- In any rotated sorted array, for any split `mid`, AT LEAST ONE HALF is strictly sorted.
- Identify which half is sorted (`nums[low] <= nums[mid]` means left half is sorted).
- Check if `target` falls within the sorted half's boundaries:
  - If yes: narrow search to that half.
  - If no: search the other (unsorted) half.

Time Complexity: O(log n) - Halving search space at each iteration.
Space Complexity: O(1) - Constant auxiliary space.
"""
from typing import List


def search_rotated(nums: List[int], target: int) -> int:
    """
    Searches for target in a rotated sorted array in O(log n) time.
    """
    low = 0
    high = len(nums) - 1

    while low <= high:
        mid = low + (high - low) // 2

        if nums[mid] == target:
            return mid

        # Check if the Left Half [low ... mid] is sorted
        if nums[low] <= nums[mid]:
            # Is target within the sorted left half?
            if nums[low] <= target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        # Otherwise, the Right Half [mid ... high] MUST be sorted
        else:
            # Is target within the sorted right half?
            if nums[mid] < target <= nums[high]:
                low = mid + 1
            else:
                high = mid - 1

    return -1


# Aliases for camelCase and LeetCode convention
searchRotated = search_rotated
search = search_rotated


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    nums1 = [4, 5, 6, 7, 0, 1, 2]
    print("Search Rotated (target=0):", search_rotated(nums1, 0))  # Expected: 4
    print("Search Rotated (target=3):", search_rotated(nums1, 3))  # Expected: -1


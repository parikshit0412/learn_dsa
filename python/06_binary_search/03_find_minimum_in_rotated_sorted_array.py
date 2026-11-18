"""
Problem: #153 - Find Minimum in Rotated Sorted Array (Medium)
LeetCode Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

Suppose an array of length `n` sorted in ascending order is rotated between 1 and `n` times.
Given the sorted rotated array `nums` of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.

Strategy: Binary Search on Inflection Point
- Compare `nums[mid]` with `nums[high]`:
  - If `nums[mid] > nums[high]`: The pivot/drop point is to the RIGHT of `mid`. Set `low = mid + 1`.
  - If `nums[mid] <= nums[high]`: The minimum is at `mid` or to the LEFT of `mid`. Set `high = mid`.
- Loop terminates when `low == high`, pointing precisely to the minimum element.

Time Complexity: O(log n) - Search range halved on every iteration.
Space Complexity: O(1) - Constant auxiliary space.
"""
from typing import List


def find_min(nums: List[int]) -> int:
    """
    Finds the minimum element in a rotated sorted array in O(log n) time.
    """
    low = 0
    high = len(nums) - 1

    # Continue narrowing search space until low and high converge
    while low < high:
        mid = low + (high - low) // 2

        # If middle element is greater than rightmost element,
        # inflection point (minimum) must be in right half (mid + 1 ... high)
        if nums[mid] > nums[high]:
            low = mid + 1
        # Otherwise, right half is sorted normally, so minimum is at mid or in left half
        else:
            high = mid

    return nums[low]


# Alias for camelCase
findMin = find_min


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    nums1 = [3, 4, 5, 1, 2]
    print("Find Min ([3,4,5,1,2]):", find_min(nums1))  # Expected: 1

    nums2 = [4, 5, 6, 7, 0, 1, 2]
    print("Find Min ([4,5,6,7,0,1,2]):", find_min(nums2))  # Expected: 0

    nums3 = [11, 13, 15, 17]
    print("Find Min ([11,13,15,17]):", find_min(nums3))  # Expected: 11


"""
Problem: #238 - Product of Array Except Self (Medium)
LeetCode Link: https://leetcode.com/problems/product-of-array-except-self/

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to
the product of all the elements of `nums` except `nums[i]`.
You must write an algorithm that runs in O(n) time and without using the division operation.

Optimal Strategy (Prefix & Suffix Products in O(1) Auxiliary Space):
- Pass 1 (Left to Right): Calculate prefix products and store directly in `output`.
- Pass 2 (Right to Left): Maintain running suffix product and multiply with `output[i]`.

Time Complexity: O(n) - Two linear passes through the array.
Space Complexity: O(1) - Output array does not count toward auxiliary space complexity.
"""
from typing import List


def product_except_self(nums: List[int]) -> List[int]:
    """
    Computes an array of products of all elements except nums[i] without division.
    """
    n = len(nums)
    # Initialize result array of size n filled with 1s
    output = [1] * n

    # --- Step 1: Compute Prefix Products (Left to Right) ---
    # `prefix` represents the product of all elements to the left of index i
    prefix = 1
    for i in range(n):
        output[i] = prefix
        prefix *= nums[i]

    # --- Step 2: Multiply by Suffix Products (Right to Left) ---
    # `suffix` represents the product of all elements to the right of index i
    suffix = 1
    for i in range(n - 1, -1, -1):
        output[i] *= suffix
        suffix *= nums[i]

    return output


# Alias for camelCase
productExceptSelf = product_except_self


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    nums1 = [1, 2, 3, 4]
    print("Product Except Self (Test 1):", product_except_self(nums1))  # Expected: [24, 12, 8, 6]

    nums2 = [-1, 1, 0, -3, 3]
    print("Product Except Self (Test 2):", product_except_self(nums2))  # Expected: [0, 0, 9, 0, 0]


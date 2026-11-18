"""
Problem: #78 - Subsets (Medium)
LeetCode Link: https://leetcode.com/problems/subsets/
AI Relevance: Combinatorial search spaces, prompt permutation generation,
              feature subset selection, and Tree-of-Thoughts exploration.

Strategy: Recursive Backtracking (Include / Exclude Decision Tree)
Time Complexity: O(n * 2^n)
Space Complexity: O(n)
"""
from typing import List


def subsets(nums: List[int]) -> List[List[int]]:
    """
    Generates all subsets (power set) of a list of unique numbers.
    """
    result: List[List[int]] = []
    current_subset: List[int] = []

    def backtrack(index: int) -> None:
        if index == len(nums):
            result.append(list(current_subset))
            return

        # Choice 1: Include nums[index]
        current_subset.append(nums[index])
        backtrack(index + 1)

        # Choice 2: Exclude nums[index]
        current_subset.pop()
        backtrack(index + 1)

    backtrack(0)
    return result


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    print("Subsets ([1, 2, 3]):", subsets([1, 2, 3]))


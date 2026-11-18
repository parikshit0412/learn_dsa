"""
Problem: #56 - Merge Intervals (Medium)
LeetCode Link: https://leetcode.com/problems/merge-intervals/

Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals,
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Strategy: Sorting + Linear Sweep
1. Sort intervals by their start times in ascending order (`interval[0]`).
2. Initialize `merged` list with first interval.
3. For each subsequent interval `[curr_start, curr_end]`:
   - If `curr_start <= last_merged_end`, overlap exists -> `last_merged_end = max(last_merged_end, curr_end)`.
   - Otherwise, disjoint interval -> append `[curr_start, curr_end]` to `merged`.

Time Complexity: O(n log n) - Dominated by initial sorting.
Space Complexity: O(n) - Storage for merged result array.
"""
from typing import List


def merge(intervals: List[List[int]]) -> List[List[int]]:
    """
    Merges all overlapping intervals.
    """
    if len(intervals) <= 1:
        return intervals

    # Step 1: Sort intervals by start time
    intervals = sorted(intervals, key=lambda x: x[0])

    # Step 2: Initialize result with first sorted interval (copy to prevent mutating original)
    merged: List[List[int]] = [[intervals[0][0], intervals[0][1]]]

    # Step 3: Iterate through remaining intervals
    for current_start, current_end in intervals[1:]:
        last_merged_end = merged[-1][1]

        if current_start <= last_merged_end:
            # Overlap: extend end of previous interval
            merged[-1][1] = max(last_merged_end, current_end)
        else:
            # Disjoint: append as new interval
            merged.append([current_start, current_end])

    return merged


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]]
    print("Merge Intervals (Test 1):", merge(intervals1))
    # Expected: [[1, 6], [8, 10], [15, 18]]

    intervals2 = [[1, 4], [4, 5]]
    print("Merge Intervals (Test 2):", merge(intervals2))
    # Expected: [[1, 5]]


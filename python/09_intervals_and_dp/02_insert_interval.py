"""
Problem: #57 - Insert Interval (Medium)
LeetCode Link: https://leetcode.com/problems/insert-interval/

You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [start_i, end_i]`
sorted in ascending order by `start_i`. You are also given an interval `new_interval = [start, end]`
that represents the start and end of another interval.
Insert `new_interval` into `intervals` such that `intervals` is still sorted and non-overlapping.

Strategy: Three-Phase Linear Sweep
- Phase 1: Append all intervals that completely end BEFORE `new_interval` starts (`interval[1] < new_interval[0]`).
- Phase 2: Merge all intervals that overlap with `new_interval` by taking min start and max end.
- Phase 3: Append all intervals that start AFTER `new_interval` ends (`interval[0] > new_interval[1]`).

Time Complexity: O(n) - Single pass through existing sorted intervals.
Space Complexity: O(n) - Result array storing all intervals.
"""
from typing import List


def insert(intervals: List[List[int]], new_interval: List[int]) -> List[List[int]]:
    """
    Inserts a new interval and merges overlapping intervals.
    """
    result: List[List[int]] = []
    i = 0
    n = len(intervals)
    curr_new = list(new_interval)

    # Phase 1: Add all intervals ending before new_interval begins
    while i < n and intervals[i][1] < curr_new[0]:
        result.append(intervals[i])
        i += 1

    # Phase 2: Merge overlapping intervals into curr_new
    while i < n and intervals[i][0] <= curr_new[1]:
        curr_new[0] = min(curr_new[0], intervals[i][0])
        curr_new[1] = max(curr_new[1], intervals[i][1])
        i += 1

    result.append(curr_new)

    # Phase 3: Add all remaining intervals that start after curr_new ends
    while i < n:
        result.append(intervals[i])
        i += 1

    return result


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    intervals1 = [[1, 3], [6, 9]]
    new_int1 = [2, 5]
    print("Insert Interval (Test 1):", insert(intervals1, new_int1))
    # Expected: [[1, 5], [6, 9]]

    intervals2 = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]]
    new_int2 = [4, 8]
    print("Insert Interval (Test 2):", insert(intervals2, new_int2))
    # Expected: [[1, 2], [3, 10], [12, 16]]


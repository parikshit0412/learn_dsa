/**
 * Problem: #56 - Merge Intervals (Medium)
 * LeetCode Link: https://leetcode.com/problems/merge-intervals/
 * 
 * Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals,
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.
 * 
 * Strategy: Sorting + Linear Sweep
 * 1. Sort intervals by their start times in ascending order (`a[0] - b[0]`).
 * 2. Initialize `merged` array with the first interval.
 * 3. For each subsequent interval `[currStart, currEnd]`:
 *    - Compare `currStart` with `lastMergedEnd`.
 *    - If `currStart <= lastMergedEnd`, an overlap exists -> update `lastMergedEnd = max(lastMergedEnd, currEnd)`.
 *    - If `currStart > lastMergedEnd`, no overlap -> append `[currStart, currEnd]` to `merged`.
 * 
 * Time Complexity: O(n log n) - Dominated by initial sorting.
 * Space Complexity: O(n) - Storage for merged result array (or O(log n) sorting auxiliary space).
 */

export function merge(intervals: number[][]): number[][] {
  // Edge case: If 0 or 1 interval, no merging possible
  if (intervals.length <= 1) {
    return intervals;
  }

  // Step 1: Sort intervals by ascending start times
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 2: Initialize result with first sorted interval
  const merged: number[][] = [intervals[0]];

  // Step 3: Iterate through remaining intervals
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = merged[merged.length - 1];

    const currentStart = currentInterval[0];
    const currentEnd = currentInterval[1];
    const lastMergedEnd = lastMergedInterval[1];

    // Check if current interval overlaps with the previous merged interval
    if (currentStart <= lastMergedEnd) {
      // Merge by expanding the end time to the maximum of both
      lastMergedInterval[1] = Math.max(lastMergedEnd, currentEnd);
    } else {
      // Disjoint interval -> push as new entry in merged list
      merged.push(currentInterval);
    }
  }

  return merged;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
  console.log('Merge Intervals (Test 1):', merge(intervals1));
  // Expected: [[1, 6], [8, 10], [15, 18]]

  const intervals2 = [[1, 4], [4, 5]];
  console.log('Merge Intervals (Test 2):', merge(intervals2));
  // Expected: [[1, 5]]
}

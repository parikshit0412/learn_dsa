/**
 * Problem: #57 - Insert Interval (Medium)
 * LeetCode Link: https://leetcode.com/problems/insert-interval/
 * 
 * You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [start_i, end_i]`
 * sorted in ascending order by `start_i`. You are also given an interval `newInterval = [start, end]`
 * that represents the start and end of another interval.
 * Insert `newInterval` into `intervals` such that `intervals` is still sorted and non-overlapping.
 * 
 * Strategy: Three-Phase Linear Sweep
 * - Phase 1: Append all intervals that completely end BEFORE `newInterval` starts (`intervals[i][1] < newInterval[0]`).
 * - Phase 2: Merge all intervals that overlap with `newInterval` by taking min start and max end.
 * - Phase 3: Append all intervals that start AFTER `newInterval` ends (`intervals[i][0] > newInterval[1]`).
 * 
 * Time Complexity: O(n) - Single pass through existing sorted intervals.
 * Space Complexity: O(n) - Result array storing all intervals.
 */

export function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let i = 0;
  const n = intervals.length;

  // Phase 1: Add all intervals that end before newInterval begins
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Phase 2: Merge overlapping intervals into newInterval
  // Overlap condition: current interval starts before or when newInterval ends
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  // Push the merged newInterval
  result.push(newInterval);

  // Phase 3: Add all remaining intervals that start after newInterval ends
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const intervals1 = [[1, 3], [6, 9]];
  const newInt1 = [2, 5];
  console.log('Insert Interval (Test 1):', insert(intervals1, newInt1));
  // Expected: [[1, 5], [6, 9]]

  const intervals2 = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
  const newInt2 = [4, 8];
  console.log('Insert Interval (Test 2):', insert(intervals2, newInt2));
  // Expected: [[1, 2], [3, 10], [12, 16]]
}

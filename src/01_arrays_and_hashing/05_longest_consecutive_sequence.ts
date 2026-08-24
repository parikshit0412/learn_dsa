/**
 * Problem: #128 - Longest Consecutive Sequence (Medium)
 * LeetCode Link: https://leetcode.com/problems/longest-consecutive-sequence/
 * 
 * Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * 
 * Optimal Strategy:
 * 1. Insert all numbers into a Set for O(1) membership checks.
 * 2. Only start counting a sequence from `num` if `num - 1` does NOT exist in the set (indicating `num` is sequence start).
 * 3. Count consecutive numbers `num + 1, num + 2, ...` and update `longestStreak`.
 * 
 * Time Complexity: O(n) - Each number is visited at most twice (once in outer loop, once in inner while loop).
 * Space Complexity: O(n) - Hash set storing all unique numbers.
 */

export function longestConsecutive(nums: number[]): number {
  // Edge case: empty array has longest consecutive streak of 0
  if (nums.length === 0) return 0;

  // Store all numbers in a HashSet for O(1) average-time lookups
  const numSet = new Set<number>(nums);
  let longestStreak = 0;

  // Iterate over each unique number in the set
  for (const num of numSet) {
    // Check if `num` is the START of a consecutive sequence.
    // If `num - 1` exists, then `num` is not the start, so we skip it to avoid redundant counting.
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Incrementally check for consecutive following numbers
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // Update maximum streak found so far
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const nums1 = [100, 4, 200, 1, 3, 2];
  console.log('Longest Consecutive (Test 1):', longestConsecutive(nums1)); // Expected: 4 (sequence: [1, 2, 3, 4])

  const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
  console.log('Longest Consecutive (Test 2):', longestConsecutive(nums2)); // Expected: 9 (sequence: [0, 1, 2, 3, 4, 5, 6, 7, 8])
}

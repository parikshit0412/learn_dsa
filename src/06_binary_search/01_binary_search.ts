/**
 * Problem: #704 - Binary Search (Easy)
 * LeetCode Link: https://leetcode.com/problems/binary-search/
 * 
 * Given an array of integers `nums` which is sorted in ascending order, and an integer `target`,
 * write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Strategy: Standard Binary Search
 * - Maintain search boundaries `low = 0` and `high = nums.length - 1`.
 * - Calculate mid point `mid = low + Math.floor((high - low) / 2)` (prevents integer overflow).
 * - Narrow search space by half each iteration.
 * 
 * Time Complexity: O(log n) - Search space divides by 2 on each step.
 * Space Complexity: O(1) - Constant auxiliary space.
 */

export function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  // Search while the current search space contains at least one element
  while (low <= high) {
    // Calculate middle index without risk of 32-bit overflow
    const mid = low + Math.floor((high - low) / 2);
    const midVal = nums[mid];

    if (midVal === target) {
      // Target found -> return its index
      return mid;
    } else if (midVal < target) {
      // Target is in the right half -> discard left half
      low = mid + 1;
    } else {
      // Target is in the left half -> discard right half
      high = mid - 1;
    }
  }

  // Target not present in nums array
  return -1;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const nums1 = [-1, 0, 3, 5, 9, 12];
  console.log('Binary Search (target=9):', search(nums1, 9)); // Expected: 4
  console.log('Binary Search (target=2):', search(nums1, 2)); // Expected: -1
}

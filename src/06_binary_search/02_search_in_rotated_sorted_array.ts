/**
 * Problem: #33 - Search in Rotated Sorted Array (Medium)
 * LeetCode Link: https://leetcode.com/problems/search-in-rotated-sorted-array/
 * 
 * There is an integer array `nums` sorted in ascending order (with distinct values),
 * which is possibly rotated at an unknown pivot index.
 * Given `nums` and integer `target`, return the index of `target` if it is in `nums`, or -1 if it is not.
 * You must achieve an algorithm with O(log n) runtime complexity.
 * 
 * Strategy: Modified Binary Search
 * - In any rotated sorted array, for any split `mid`, AT LEAST ONE HALF is strictly sorted.
 * - Identify which half is sorted (`nums[low] <= nums[mid]` means left half is sorted).
 * - Check if `target` falls within the sorted half's boundaries:
 *   - If yes: narrow search to that half.
 *   - If no: search the other (unsorted) half.
 * 
 * Time Complexity: O(log n) - Halving search space at each iteration.
 * Space Complexity: O(1) - Constant auxiliary space.
 */

export function searchRotated(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    // Found target directly at mid
    if (nums[mid] === target) {
      return mid;
    }

    // Check if the Left Half [low ... mid] is sorted
    if (nums[low] <= nums[mid]) {
      // Is target within the sorted left half?
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1; // Narrow to left half
      } else {
        low = mid + 1;  // Search right half
      }
    }
    // Otherwise, the Right Half [mid ... high] MUST be sorted
    else {
      // Is target within the sorted right half?
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;  // Narrow to right half
      } else {
        high = mid - 1; // Search left half
      }
    }
  }

  // Target not found
  return -1;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const nums1 = [4, 5, 6, 7, 0, 1, 2];
  console.log('Search Rotated (target=0):', searchRotated(nums1, 0)); // Expected: 4
  console.log('Search Rotated (target=3):', searchRotated(nums1, 3)); // Expected: -1
}

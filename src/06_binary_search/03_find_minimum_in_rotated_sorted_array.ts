/**
 * Problem: #153 - Find Minimum in Rotated Sorted Array (Medium)
 * LeetCode Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * 
 * Suppose an array of length `n` sorted in ascending order is rotated between 1 and `n` times.
 * Given the sorted rotated array `nums` of unique elements, return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 * 
 * Strategy: Binary Search on Inflection Point
 * - Compare `nums[mid]` with `nums[high]`:
 *   - If `nums[mid] > nums[high]`: The pivot/drop point is to the RIGHT of `mid`. Set `low = mid + 1`.
 *   - If `nums[mid] <= nums[high]`: The minimum is at `mid` or to the LEFT of `mid`. Set `high = mid`.
 * - Loop terminates when `low === high`, pointing precisely to the minimum element.
 * 
 * Time Complexity: O(log n) - Search range halved on every iteration.
 * Space Complexity: O(1) - Constant auxiliary space.
 */

export function findMin(nums: number[]): number {
  let low = 0;
  let high = nums.length - 1;

  // Continue narrowing search space until low and high converge on a single index
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);

    // If middle element is greater than rightmost element,
    // the inflection point (minimum) must be in the right half (mid + 1 ... high)
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    }
    // Otherwise, the right half is sorted normally, so minimum is at mid or in left half
    else {
      high = mid;
    }
  }

  // When low == high, we have converged on the minimum element
  return nums[low];
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const nums1 = [3, 4, 5, 1, 2];
  console.log('Find Min ([3,4,5,1,2]):', findMin(nums1)); // Expected: 1

  const nums2 = [4, 5, 6, 7, 0, 1, 2];
  console.log('Find Min ([4,5,6,7,0,1,2]):', findMin(nums2)); // Expected: 0

  const nums3 = [11, 13, 15, 17];
  console.log('Find Min ([11,13,15,17]):', findMin(nums3)); // Expected: 11
}

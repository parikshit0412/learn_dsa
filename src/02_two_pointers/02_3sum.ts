/**
 * Problem: #15 - 3Sum (Medium)
 * LeetCode Link: https://leetcode.com/problems/3sum/
 * 
 * Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]`
 * such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * Strategy:
 * 1. Sort the input array in ascending order.
 * 2. Fix the first element with an outer loop `i`.
 * 3. Use Two Pointers (`left = i + 1`, `right = n - 1`) to find pairs summing to `-nums[i]`.
 * 4. Skip duplicates for all three pointer positions.
 * 
 * Time Complexity: O(n^2) - Sorting is O(n log n), two-pointer traversal takes O(n^2).
 * Space Complexity: O(1) or O(log n) depending on the sorting implementation.
 */

export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const n = nums.length;

  // Step 1: Sort the array in ascending numerical order
  nums.sort((a, b) => a - b);

  // Step 2: Iterate through possible first elements of the triplet
  for (let i = 0; i < n - 2; i++) {
    // If the lowest number in sorted array is > 0, three positive numbers cannot sum to 0
    if (nums[i] > 0) break;

    // Skip duplicate elements for the first position to prevent duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Initialize two pointers for the remaining sub-array
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Valid triplet found!
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for the left pointer
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicates for the right pointer
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move both pointers inward to search for other combinations
        left++;
        right--;
      } else if (sum < 0) {
        // Sum is too small -> increase sum by moving left pointer right
        left++;
      } else {
        // Sum is too large -> decrease sum by moving right pointer left
        right--;
      }
    }
  }

  return result;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const nums1 = [-1, 0, 1, 2, -1, -4];
  console.log('3Sum Result 1:', threeSum(nums1)); // Expected: [[-1, -1, 2], [-1, 0, 1]]

  const nums2 = [0, 1, 1];
  console.log('3Sum Result 2:', threeSum(nums2)); // Expected: []
}

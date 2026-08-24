/**
 * Problem: #1 - Two Sum (Easy)
 * LeetCode Link: https://leetcode.com/problems/two-sum/
 * 
 * Given an array of integers `nums` and an integer `target`, return indices of the
 * two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Time Complexity: O(n) - Single pass through the array
 * Space Complexity: O(n) - Hash map storing up to n elements
 */

export function twoSum(nums: number[], target: number): number[] {
  // Create a Hash Map to store numbers we have seen so far as keys,
  // and their corresponding array indices as values.
  const seenMap = new Map<number, number>();

  // Iterate through the array using a standard for loop to track current index `i`.
  for (let i = 0; i < nums.length; i++) {
    // Current number at index i
    const currentNum = nums[i];

    // Calculate the required complement that would sum with currentNum to equal target
    const complement = target - currentNum;

    // Check if the complement has already been recorded in our hash map
    if (seenMap.has(complement)) {
      // If found, retrieve the previous index of the complement and return both indices
      const prevIndex = seenMap.get(complement)!;
      return [prevIndex, i];
    }

    // Otherwise, record current number and its index in the map for future lookups
    seenMap.set(currentNum, i);
  }

  // If no solution is found (guaranteed not to happen per problem constraints), return empty array
  return [];
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const nums1 = [2, 7, 11, 15];
  const target1 = 9;
  console.log('Two Sum Result 1:', twoSum(nums1, target1)); // Expected: [0, 1]

  const nums2 = [3, 2, 4];
  const target2 = 6;
  console.log('Two Sum Result 2:', twoSum(nums2, target2)); // Expected: [1, 2]
}

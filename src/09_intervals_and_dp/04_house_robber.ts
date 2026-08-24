/**
 * Problem: #198 - House Robber (Medium)
 * LeetCode Link: https://leetcode.com/problems/house-robber/
 * 
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.
 * Adjacent houses have security systems connected; it will automatically contact the police if two adjacent houses
 * were broken into on the same night.
 * Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 * 
 * Strategy: Dynamic Programming with Constant Space
 * - For house `i`, there are two choices:
 *   1. Rob house `i`: Gain `nums[i] + maxMoney(i - 2)`.
 *   2. Skip house `i`: Gain `maxMoney(i - 1)`.
 * - State transition: `currentMax = max(rob1 + nums[i], rob2)`.
 * 
 * Time Complexity: O(n) - Single linear pass.
 * Space Complexity: O(1) - Two variables track previous maximum amounts.
 */

export function rob(nums: number[]): number {
  // `rob1` stores the max profit achievable up to two houses prior
  let rob1 = 0;
  // `rob2` stores the max profit achievable up to the immediately preceding house
  let rob2 = 0;

  // Iterate over each house money value
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Current maximum is either:
    // 1. Rob current house + max from 2 houses back (rob1 + num)
    // 2. Skip current house, retaining best result up to previous house (rob2)
    const currentMax = Math.max(rob1 + num, rob2);

    // Shift state variables forward
    rob1 = rob2;
    rob2 = currentMax;
  }

  // `rob2` contains the maximum money robbed from all houses
  return rob2;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const nums1 = [1, 2, 3, 1];
  console.log('House Robber (Test 1):', rob(nums1)); // Expected: 4 (rob house 1 and 3)

  const nums2 = [2, 7, 9, 3, 1];
  console.log('House Robber (Test 2):', rob(nums2)); // Expected: 12 (rob house 1, 3, 5)
}

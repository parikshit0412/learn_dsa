/**
 * Problem: #347 - Top K Frequent Elements (Medium)
 * LeetCode Link: https://leetcode.com/problems/top-k-frequent-elements/
 * 
 * Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.
 * You may return the answer in any order.
 * 
 * Optimal Strategy: Bucket Sort Approach
 * 1. Count frequency of each number using a Map.
 * 2. Create frequency buckets (array of arrays) where index = frequency count.
 * 3. Iterate backwards from highest frequency bucket and gather top k elements.
 * 
 * Time Complexity: O(n) - Linear pass for counting and bucket population.
 * Space Complexity: O(n) - Storage for frequency map and buckets.
 */

export function topKFrequent(nums: number[], k: number): number[] {
  // Step 1: Count frequency of each number
  const countMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    // Increment existing count or initialize to 1
    countMap.set(n, (countMap.get(n) || 0) + 1);
  }

  // Step 2: Create buckets array where index represents frequency
  // Maximum possible frequency is nums.length, so bucket size is nums.length + 1
  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  // Place each number into the bucket corresponding to its frequency count
  for (const [num, freq] of countMap.entries()) {
    buckets[freq].push(num);
  }

  // Step 3: Traverse buckets from highest frequency to lowest
  const result: number[] = [];

  for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
    const currentBucket = buckets[freq];

    // If bucket contains numbers with this frequency, collect them
    if (currentBucket.length > 0) {
      for (let j = 0; j < currentBucket.length && result.length < k; j++) {
        result.push(currentBucket[j]);
      }
    }
  }

  // Return the accumulated top k frequent numbers
  return result;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const nums1 = [1, 1, 1, 2, 2, 3];
  const k1 = 2;
  console.log('Top K Frequent (Test 1):', topKFrequent(nums1, k1)); // Expected: [1, 2]

  const nums2 = [1];
  const k2 = 1;
  console.log('Top K Frequent (Test 2):', topKFrequent(nums2, k2)); // Expected: [1]
}

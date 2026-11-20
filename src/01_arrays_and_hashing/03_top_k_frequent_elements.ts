/**
 * Problem: #347 - Top K Frequent Elements (Medium)
 * LeetCode Link: https://leetcode.com/problems/top-k-frequent-elements/
 * 
 * Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.
 * You may return the answer in any order.
 * 
 * Approach 1 (Optimal): Bucket Sort Approach
 * 1. Count frequency of each number using a Map.
 * 2. Create frequency buckets (array of arrays) where index = frequency count.
 * 3. Iterate backwards from highest frequency bucket and gather top k elements.
 * Time Complexity: O(n) - Linear pass for counting and bucket population.
 * Space Complexity: O(n) - Storage for frequency map and buckets.
 * 
 * Approach 2 (Second Opinion / Baseline): Hash Map + Sorting
 * 1. Count frequency using a Map.
 * 2. Convert map entries to an array and sort descending by frequency count.
 * 3. Slice top k and map back to keys.
 * Time Complexity: O(n log n) or O(m log m) where m is unique elements count.
 * Space Complexity: O(n) - Storage for map and sorted entries.
 */

// --- Approach 1: Bucket Sort (Optimal O(n) Time) ---
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

// --- Approach 2 (Second Opinion): Hash Map + Sorting (O(n log n) Time) ---
export function topKFrequentSorting(nums: number[], k: number): number[] {
  // Step 1: Count frequency of each number
  const frequencyMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) || 0) + 1);
  }

  // Step 2: Sort entries by frequency descending, slice top k, extract keys
  return [...frequencyMap.entries()]
    .sort((a, b) => b[1] - a[1]) // Sort by frequency count (descending)
    .slice(0, k)                 // Take top k elements
    .map(([num]) => num);        // Extract the number
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const nums1 = [1, 1, 1, 2, 2, 3];
  const k1 = 2;
  console.log('--- Approach 1 (Bucket Sort O(n)) ---');
  console.log('Top K Frequent (Test 1):', topKFrequent(nums1, k1)); // Expected: [1, 2]

  const nums2 = [1];
  const k2 = 1;
  console.log('Top K Frequent (Test 2):', topKFrequent(nums2, k2)); // Expected: [1]

  console.log('\n--- Approach 2 (Map + Sort O(n log n)) ---');
  console.log('Top K Frequent Sorting (Test 1):', topKFrequentSorting(nums1, k1)); // Expected: [1, 2]
  console.log('Top K Frequent Sorting (Test 2):', topKFrequentSorting(nums2, k2)); // Expected: [1]
}

/**
 * Problem: #238 - Product of Array Except Self (Medium)
 * LeetCode Link: https://leetcode.com/problems/product-of-array-except-self/
 * 
 * Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to
 * the product of all the elements of `nums` except `nums[i]`.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * Optimal Strategy (Prefix & Suffix Products in O(1) Auxiliary Space):
 * - Pass 1 (Left to Right): Calculate prefix products and store directly in `answer`.
 * - Pass 2 (Right to Left): Maintain running suffix product and multiply with `answer[i]`.
 * 
 * Time Complexity: O(n) - Two linear passes through the array.
 * Space Complexity: O(1) - Output array does not count toward auxiliary space complexity.
 */

export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  // Initialize result array of size n filled with 1s
  const output: number[] = new Array(n).fill(1);

  // --- Step 1: Compute Prefix Products (Left to Right) ---
  // `prefix` represents the product of all elements to the left of index i
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    // Current output[i] becomes the product of all numbers before i
    output[i] = prefix;
    // Update prefix product by including nums[i] for subsequent indices
    prefix *= nums[i];
  }

  // --- Step 2: Multiply by Suffix Products (Right to Left) ---
  // `suffix` represents the product of all elements to the right of index i
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    // Multiply existing prefix product by suffix product
    output[i] *= suffix;
    // Update suffix product by including nums[i] for prior indices
    suffix *= nums[i];
  }

  // Return final product array
  return output;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const nums1 = [1, 2, 3, 4];
  console.log('Product Except Self (Test 1):', productExceptSelf(nums1)); // Expected: [24, 12, 8, 6]

  const nums2 = [-1, 1, 0, -3, 3];
  console.log('Product Except Self (Test 2):', productExceptSelf(nums2)); // Expected: [0, 0, 9, 0, 0]
}

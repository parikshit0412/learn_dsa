/**
 * Problem: #78 - Subsets (Medium)
 * LeetCode Link: https://leetcode.com/problems/subsets/
 * AI Relevance: Combinatorial search spaces, prompt permutation generation,
 *               feature subset selection, and Tree-of-Thoughts exploration.
 * 
 * Given an integer array `nums` of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 
 * Strategy: Backtracking / Decision Tree
 * - At each index `i`, we make a binary choice:
 *   1. Include `nums[i]` in current subset.
 *   2. Exclude `nums[i]` from current subset.
 * 
 * Time Complexity: O(n * 2^n) - 2^n subsets, each taking O(n) to copy.
 * Space Complexity: O(n) - Recursion stack depth.
 */

export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const currentSubset: number[] = [];

  function backtrack(index: number): void {
    // When we have reached the end of nums, record the current subset
    if (index === nums.length) {
      result.push([...currentSubset]);
      return;
    }

    // Choice 1: Include nums[index]
    currentSubset.push(nums[index]);
    backtrack(index + 1);

    // Choice 2: Exclude nums[index] (Backtrack step)
    currentSubset.pop();
    backtrack(index + 1);
  }

  backtrack(0);
  return result;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  console.log('Subsets ([1, 2, 3]):', subsets([1, 2, 3]));
  // Expected: [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3], []]
}


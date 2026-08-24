/**
 * Problem: #11 - Container With Most Water (Medium)
 * LeetCode Link: https://leetcode.com/problems/container-with-most-water/
 * 
 * You are given an integer array `height` of length `n`. There are `n` vertical lines drawn
 * such that the two endpoints of the ith line are `(i, 0)` and `(i, height[i])`.
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * 
 * Strategy: Greedy Two Pointers
 * - Start with widest container (`left = 0`, `right = n - 1`).
 * - Calculate current area: `(right - left) * min(height[left], height[right])`.
 * - The limiting factor is always the shorter line. Moving the taller line can never increase the area
 *   (width decreases and height cannot exceed the shorter line). Hence, always advance the shorter line inward.
 * 
 * Time Complexity: O(n) - Single pass with two pointers converging.
 * Space Complexity: O(1) - Constant auxiliary space.
 */

export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  // Process while boundaries have distance between them
  while (left < right) {
    // Current width between the two vertical lines
    const width = right - left;

    // The water level is constrained by the shorter of the two heights
    const minHeight = Math.min(height[left], height[right]);

    // Calculate current container volume
    const currentArea = width * minHeight;

    // Track maximum area found
    maxWater = Math.max(maxWater, currentArea);

    // Greedily move the pointer pointing to the shorter vertical bar
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  console.log('Max Area (Test 1):', maxArea(height1)); // Expected: 49

  const height2 = [1, 1];
  console.log('Max Area (Test 2):', maxArea(height2)); // Expected: 1
}

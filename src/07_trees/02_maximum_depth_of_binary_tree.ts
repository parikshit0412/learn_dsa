import { TreeNode, createBinaryTree } from '../common/TreeNode.js';

/**
 * Problem: #104 - Maximum Depth of Binary Tree (Easy)
 * LeetCode Link: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * 
 * Strategy: Divide and Conquer / Recursive DFS
 * - Depth of a node = `1 + max(depth(left), depth(right))`.
 * - Base Case: Null node contributes depth of 0.
 * 
 * Time Complexity: O(n) - Every node visited once.
 * Space Complexity: O(h) - Recursive call stack proportional to tree height h.
 */

export function maxDepth(root: TreeNode | null): number {
  // Base case: If current node is null, its depth is 0
  if (root === null) {
    return 0;
  }

  // Recursively calculate maximum depth of left subtree
  const leftDepth = maxDepth(root.left);

  // Recursively calculate maximum depth of right subtree
  const rightDepth = maxDepth(root.right);

  // The depth of current tree is 1 (for current node) plus the maximum of left or right subtree
  return 1 + Math.max(leftDepth, rightDepth);
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const tree1 = createBinaryTree([3, 9, 20, null, null, 15, 7]);
  console.log('Max Depth (Test 1):', maxDepth(tree1)); // Expected: 3

  const tree2 = createBinaryTree([1, null, 2]);
  console.log('Max Depth (Test 2):', maxDepth(tree2)); // Expected: 2
}

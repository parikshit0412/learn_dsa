import { TreeNode, createBinaryTree, binaryTreeToArray } from '../common/TreeNode.js';

/**
 * Problem: #226 - Invert Binary Tree (Easy)
 * LeetCode Link: https://leetcode.com/problems/invert-binary-tree/
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 * (Inverting means swapping every left and right child recursively).
 * 
 * Strategy: Post-order / Pre-order Depth-First Search (DFS)
 * - Base Case: If node is null, return null.
 * - Swap left and right child references.
 * - Recursively invert left and right subtrees.
 * 
 * Time Complexity: O(n) - Visits every node in the tree once.
 * Space Complexity: O(h) - Call stack height, where h is tree height (O(log n) balanced, O(n) worst).
 */

export function invertTree(root: TreeNode | null): TreeNode | null {
  // Base case: If tree/subtree is empty, nothing to invert
  if (root === null) {
    return null;
  }

  // Temporarily store left child before swapping
  const tempLeft = root.left;

  // Recursively invert right subtree and assign to left child
  root.left = invertTree(root.right);

  // Recursively invert saved original left subtree and assign to right child
  root.right = invertTree(tempLeft);

  // Return inverted root node
  return root;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const tree1 = createBinaryTree([4, 2, 7, 1, 3, 6, 9]);
  const inverted1 = invertTree(tree1);
  console.log('Inverted Tree 1:', binaryTreeToArray(inverted1));
  // Expected: [4, 7, 2, 9, 6, 3, 1]

  const tree2 = createBinaryTree([2, 1, 3]);
  const inverted2 = invertTree(tree2);
  console.log('Inverted Tree 2:', binaryTreeToArray(inverted2));
  // Expected: [2, 3, 1]
}

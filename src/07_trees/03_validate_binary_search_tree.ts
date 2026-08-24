import { TreeNode, createBinaryTree } from '../common/TreeNode.js';

/**
 * Problem: #98 - Validate Binary Search Tree (Medium)
 * LeetCode Link: https://leetcode.com/problems/validate-binary-search-tree/
 * 
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as:
 * - The left subtree of a node contains only nodes with keys strictly less than the node's key.
 * - The right subtree of a node contains only nodes with keys strictly greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 * 
 * Strategy: Recursive Range Validation
 * - Pass valid `(minLimit, maxLimit)` boundaries down the recursion tree.
 * - When traversing left: max allowed limit becomes `node.val`.
 * - When traversing right: min allowed limit becomes `node.val`.
 * 
 * Time Complexity: O(n) - Validates each node in the tree once.
 * Space Complexity: O(h) - Stack space bounded by tree height h.
 */

export function isValidBST(root: TreeNode | null): boolean {
  // Helper function to recursively validate each subtree within strict numerical bounds
  function validate(node: TreeNode | null, minLimit: number, maxLimit: number): boolean {
    // An empty subtree is a valid BST
    if (node === null) {
      return true;
    }

    // Current node value must strictly satisfy: minLimit < node.val < maxLimit
    if (node.val <= minLimit || node.val >= maxLimit) {
      return false;
    }

    // Left child must be < node.val, retaining existing minLimit
    const isLeftValid = validate(node.left, minLimit, node.val);

    // Right child must be > node.val, retaining existing maxLimit
    const isRightValid = validate(node.right, node.val, maxLimit);

    // Tree is valid only if both left and right subtrees are valid
    return isLeftValid && isRightValid;
  }

  // Initial bounds for root node are (-Infinity, +Infinity)
  return validate(root, -Infinity, Infinity);
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const validTree = createBinaryTree([2, 1, 3]);
  console.log('Is Valid BST ([2,1,3]):', isValidBST(validTree)); // Expected: true

  const invalidTree = createBinaryTree([5, 1, 4, null, null, 3, 6]);
  console.log('Is Valid BST ([5,1,4,null,null,3,6]):', isValidBST(invalidTree)); // Expected: false
}

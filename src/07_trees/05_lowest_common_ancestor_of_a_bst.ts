import { TreeNode, createBinaryTree } from '../common/TreeNode.js';

/**
 * Problem: #235 - Lowest Common Ancestor of a Binary Search Tree (Medium)
 * LeetCode Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-bst/
 * 
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * "The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has
 * both p and q as descendants (where we allow a node to be a descendant of itself)."
 * 
 * Strategy: Iterative BST Traversal (Exploiting BST Sorting Invariant)
 * - If both `p.val` and `q.val` are smaller than `curr.val`, LCA must lie in the left subtree.
 * - If both `p.val` and `q.val` are greater than `curr.val`, LCA must lie in the right subtree.
 * - Otherwise, we have reached the "split point" where p and q diverge on opposite sides,
 *   or one is equal to `curr`. This `curr` node is guaranteed to be their LCA.
 * 
 * Time Complexity: O(h) - Where h is tree height (O(log n) balanced, O(n) worst).
 * Space Complexity: O(1) - Constant auxiliary space for iterative traversal.
 */

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  let curr = root;

  // Traverse the tree iteratively
  while (curr !== null) {
    // Both p and q values are strictly less than current node -> LCA is in left subtree
    if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    }
    // Both p and q values are strictly greater than current node -> LCA is in right subtree
    else if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    }
    // Split occurs: p and q are on different branches, or current is one of the target nodes
    else {
      return curr;
    }
  }

  return null;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const tree = createBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
  const p = new TreeNode(2);
  const q = new TreeNode(8);
  const lca1 = lowestCommonAncestor(tree, p, q);
  console.log('LCA of 2 and 8:', lca1 ? lca1.val : null); // Expected: 6

  const p2 = new TreeNode(2);
  const q2 = new TreeNode(4);
  const lca2 = lowestCommonAncestor(tree, p2, q2);
  console.log('LCA of 2 and 4:', lca2 ? lca2.val : null); // Expected: 2
}

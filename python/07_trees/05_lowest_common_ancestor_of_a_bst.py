"""
Problem: #235 - Lowest Common Ancestor of a Binary Search Tree (Medium)
LeetCode Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-bst/

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
"The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has
both p and q as descendants (where we allow a node to be a descendant of itself)."

Strategy: Iterative BST Traversal (Exploiting BST Sorting Invariant)
- If both `p.val` and `q.val` are smaller than `curr.val`, LCA must lie in the left subtree.
- If both `p.val` and `q.val` are greater than `curr.val`, LCA must lie in the right subtree.
- Otherwise, we have reached the "split point" where p and q diverge on opposite sides,
  or one is equal to `curr`. This `curr` node is guaranteed to be their LCA.

Time Complexity: O(h) - Where h is tree height (O(log n) balanced, O(n) worst).
Space Complexity: O(1) - Constant auxiliary space for iterative traversal.
"""
import sys
from pathlib import Path
from typing import Optional

# Ensure parent directory is in sys.path for direct execution
sys.path.append(str(Path(__file__).resolve().parent.parent))

from common.tree_node import TreeNode, create_binary_tree


def lowest_common_ancestor(
    root: Optional[TreeNode], p: TreeNode, q: TreeNode
) -> Optional[TreeNode]:
    """
    Finds the lowest common ancestor of two nodes in a BST.
    """
    curr = root

    while curr is not None:
        # Both p and q values are strictly less than current node -> LCA is in left subtree
        if p.val < curr.val and q.val < curr.val:
            curr = curr.left
        # Both p and q values are strictly greater than current node -> LCA is in right subtree
        elif p.val > curr.val and q.val > curr.val:
            curr = curr.right
        # Split occurs: p and q are on different branches, or current is one of target nodes
        else:
            return curr

    return None


# Alias for camelCase
lowestCommonAncestor = lowest_common_ancestor


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    tree = create_binary_tree([6, 2, 8, 0, 4, 7, 9, None, None, 3, 5])
    p = TreeNode(2)
    q = TreeNode(8)
    lca1 = lowest_common_ancestor(tree, p, q)
    print("LCA of 2 and 8:", lca1.val if lca1 else None)  # Expected: 6

    p2 = TreeNode(2)
    q2 = TreeNode(4)
    lca2 = lowest_common_ancestor(tree, p2, q2)
    print("LCA of 2 and 4:", lca2.val if lca2 else None)  # Expected: 2


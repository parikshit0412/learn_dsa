"""
Problem: #98 - Validate Binary Search Tree (Medium)
LeetCode Link: https://leetcode.com/problems/validate-binary-search-tree/

Given the root of a binary tree, determine if it is a valid binary search tree (BST).
A valid BST is defined as:
- The left subtree of a node contains only nodes with keys strictly less than the node's key.
- The right subtree of a node contains only nodes with keys strictly greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

Strategy: Recursive Range Validation
- Pass valid `(min_limit, max_limit)` boundaries down the recursion tree.
- When traversing left: max allowed limit becomes `node.val`.
- When traversing right: min allowed limit becomes `node.val`.

Time Complexity: O(n) - Validates each node in the tree once.
Space Complexity: O(h) - Stack space bounded by tree height h.
"""
import sys
from pathlib import Path
from typing import Optional

# Ensure parent directory is in sys.path for direct execution
sys.path.append(str(Path(__file__).resolve().parent.parent))

from common.tree_node import TreeNode, create_binary_tree


def is_valid_bst(root: Optional[TreeNode]) -> bool:
    """
    Validates if a binary tree satisfies the Binary Search Tree invariant.
    """
    def validate(node: Optional[TreeNode], min_limit: float, max_limit: float) -> bool:
        if node is None:
            return True

        # Current node value must strictly satisfy: min_limit < node.val < max_limit
        if node.val <= min_limit or node.val >= max_limit:
            return False

        # Left child must be < node.val; right child must be > node.val
        return validate(node.left, min_limit, node.val) and validate(
            node.right, node.val, max_limit
        )

    return validate(root, float("-inf"), float("inf"))


# Alias for camelCase
isValidBST = is_valid_bst


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    tree1 = create_binary_tree([2, 1, 3])
    print("Is Valid BST (Test 1):", is_valid_bst(tree1))  # Expected: True

    tree2 = create_binary_tree([5, 1, 4, None, None, 3, 6])
    print("Is Valid BST (Test 2):", is_valid_bst(tree2))  # Expected: False


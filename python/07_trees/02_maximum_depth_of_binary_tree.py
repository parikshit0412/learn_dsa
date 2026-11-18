"""
Problem: #104 - Maximum Depth of Binary Tree (Easy)
LeetCode Link: https://leetcode.com/problems/maximum-depth-of-binary-tree/

Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Strategy: Divide and Conquer / Recursive DFS
- Depth of a node = `1 + max(depth(left), depth(right))`.
- Base Case: Null node contributes depth of 0.

Time Complexity: O(n) - Every node visited once.
Space Complexity: O(h) - Recursive call stack proportional to tree height h.
"""
import sys
from pathlib import Path
from typing import Optional

# Ensure parent directory is in sys.path for direct execution
sys.path.append(str(Path(__file__).resolve().parent.parent))

from common.tree_node import TreeNode, create_binary_tree


def max_depth(root: Optional[TreeNode]) -> int:
    """
    Returns the maximum depth (height) of a binary tree.
    """
    if root is None:
        return 0

    left_depth = max_depth(root.left)
    right_depth = max_depth(root.right)

    return 1 + max(left_depth, right_depth)


# Alias for camelCase
maxDepth = max_depth


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    tree1 = create_binary_tree([3, 9, 20, None, None, 15, 7])
    print("Max Depth (Test 1):", max_depth(tree1))  # Expected: 3

    tree2 = create_binary_tree([1, None, 2])
    print("Max Depth (Test 2):", max_depth(tree2))  # Expected: 2


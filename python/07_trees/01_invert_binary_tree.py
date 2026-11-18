"""
Problem: #226 - Invert Binary Tree (Easy)
LeetCode Link: https://leetcode.com/problems/invert-binary-tree/

Given the root of a binary tree, invert the tree, and return its root.
(Inverting means swapping every left and right child recursively).

Strategy: Recursive Depth-First Search (DFS)
- Base Case: If node is None, return None.
- Swap left and right child references.
- Recursively invert left and right subtrees.

Time Complexity: O(n) - Visits every node in the tree once.
Space Complexity: O(h) - Call stack height, where h is tree height (O(log n) balanced, O(n) worst).
"""
import sys
from pathlib import Path
from typing import Optional

# Ensure parent directory is in sys.path for direct execution
sys.path.append(str(Path(__file__).resolve().parent.parent))

from common.tree_node import TreeNode, create_binary_tree, binary_tree_to_array


def invert_tree(root: Optional[TreeNode]) -> Optional[TreeNode]:
    """
    Inverts a binary tree by recursively swapping left and right subtrees.
    """
    if root is None:
        return None

    # Temporarily store left child before swapping
    temp_left = root.left

    # Recursively invert right subtree and assign to left child
    root.left = invert_tree(root.right)

    # Recursively invert saved original left subtree and assign to right child
    root.right = invert_tree(temp_left)

    return root


# Alias for camelCase
invertTree = invert_tree


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    tree1 = create_binary_tree([4, 2, 7, 1, 3, 6, 9])
    inverted1 = invert_tree(tree1)
    print("Inverted Tree 1:", binary_tree_to_array(inverted1))
    # Expected: [4, 7, 2, 9, 6, 3, 1]

    tree2 = create_binary_tree([2, 1, 3])
    inverted2 = invert_tree(tree2)
    print("Inverted Tree 2:", binary_tree_to_array(inverted2))
    # Expected: [2, 3, 1]


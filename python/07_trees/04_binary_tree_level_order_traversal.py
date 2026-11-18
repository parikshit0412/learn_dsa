"""
Problem: #102 - Binary Tree Level Order Traversal (Medium)
LeetCode Link: https://leetcode.com/problems/binary-tree-level-order-traversal/

Given the root of a binary tree, return the level order traversal of its nodes' values.
(i.e., from left to right, level by level).

Strategy: Breadth-First Search (BFS) using a Queue
- Initialize queue with root.
- In each iteration of the outer loop, record `level_size = len(queue)`.
- Process exactly `level_size` nodes to gather all node values on the current level.
- Push children of current level nodes to the queue for the next level.

Time Complexity: O(n) - Every node processed exactly once.
Space Complexity: O(w) or O(n) - Maximum queue size equals maximum width of binary tree.
"""
import sys
from collections import deque
from pathlib import Path
from typing import Optional, List

# Ensure parent directory is in sys.path for direct execution
sys.path.append(str(Path(__file__).resolve().parent.parent))

from common.tree_node import TreeNode, create_binary_tree


def level_order(root: Optional[TreeNode]) -> List[List[int]]:
    """
    Returns the level order traversal of binary tree nodes' values.
    """
    if root is None:
        return []

    result: List[List[int]] = []
    queue: deque[TreeNode] = deque([root])

    while queue:
        level_size = len(queue)
        current_level: List[int] = []

        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node.val)

            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)

        result.append(current_level)

    return result


# Alias for camelCase
levelOrder = level_order


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    tree1 = create_binary_tree([3, 9, 20, None, None, 15, 7])
    print("Level Order Traversal:", level_order(tree1))
    # Expected: [[3], [9, 20], [15, 7]]


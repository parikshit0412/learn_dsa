"""
Definition for binary tree node and helper utilities.
"""
from collections import deque
from typing import Optional, List, Union


class TreeNode:
    """Definition for a binary tree node."""

    def __init__(
        self,
        val: int = 0,
        left: Optional["TreeNode"] = None,
        right: Optional["TreeNode"] = None,
    ):
        self.val = val
        self.left = left
        self.right = right

    def __repr__(self) -> str:
        return f"TreeNode({self.val})"


def create_binary_tree(values: List[Optional[int]]) -> Optional[TreeNode]:
    """
    Helper function to create a Binary Tree from a level-order list representation (LeetCode style).

    :param values: List of numbers and None representing level-order traversal
    :return: Root node of the created binary tree, or None if input is empty
    """
    if not values or values[0] is None:
        return None

    root = TreeNode(values[0])
    queue: deque[TreeNode] = deque([root])
    i = 1
    n = len(values)

    while queue and i < n:
        current = queue.popleft()

        # Process left child
        if i < n:
            left_val = values[i]
            i += 1
            if left_val is not None:
                current.left = TreeNode(left_val)
                queue.append(current.left)

        # Process right child
        if i < n:
            right_val = values[i]
            i += 1
            if right_val is not None:
                current.right = TreeNode(right_val)
                queue.append(current.right)

    return root


def binary_tree_to_array(root: Optional[TreeNode]) -> List[Optional[int]]:
    """
    Helper function to convert a Binary Tree to a level-order list (LeetCode style).

    :param root: Root node of the binary tree
    :return: List representation of the tree in level-order
    """
    if not root:
        return []

    result: List[Optional[int]] = []
    queue: deque[Optional[TreeNode]] = deque([root])

    while queue:
        node = queue.popleft()
        if node is not None:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            result.append(None)

    # Remove trailing None values to match standard LeetCode format
    while result and result[-1] is None:
        result.pop()

    return result


# Aliases for camelCase compatibility with TypeScript conventions
createBinaryTree = create_binary_tree
binaryTreeToArray = binary_tree_to_array


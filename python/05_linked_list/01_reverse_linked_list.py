"""
Problem: #206 - Reverse Linked List (Easy)
LeetCode Link: https://leetcode.com/problems/reverse-linked-list/

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

Strategy: Iterative Three-Pointer Approach
- `prev`: tracks previous node (initialized to None).
- `curr`: tracks current node being redirected (starts at head).
- `next_temp`: temporarily stores `curr.next` before reversing pointer direction.

Time Complexity: O(n) - Single pass through the n-node linked list.
Space Complexity: O(1) - Constant auxiliary memory.
"""
import sys
from pathlib import Path
from typing import Optional

# Ensure parent directory is in sys.path for direct execution
sys.path.append(str(Path(__file__).resolve().parent.parent))

from common.list_node import ListNode, create_linked_list, linked_list_to_array


def reverse_list(head: Optional[ListNode]) -> Optional[ListNode]:
    """
    Reverses a singly linked list and returns the new head.
    """
    prev: Optional[ListNode] = None
    curr: Optional[ListNode] = head

    while curr is not None:
        # 1. Temporarily store reference to the next node
        next_temp = curr.next

        # 2. Reverse current node's pointer to face previous node
        curr.next = prev

        # 3. Advance prev pointer forward to current node
        prev = curr

        # 4. Advance curr pointer forward to next node
        curr = next_temp

    # prev points to the new head
    return prev


# Alias for camelCase
reverseList = reverse_list


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    list1 = create_linked_list([1, 2, 3, 4, 5])
    reversed1 = reverse_list(list1)
    print("Reversed List 1:", linked_list_to_array(reversed1))  # Expected: [5, 4, 3, 2, 1]

    list2 = create_linked_list([1, 2])
    reversed2 = reverse_list(list2)
    print("Reversed List 2:", linked_list_to_array(reversed2))  # Expected: [2, 1]


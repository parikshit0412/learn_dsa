"""
Problem: #141 - Linked List Cycle (Easy)
LeetCode Link: https://leetcode.com/problems/linked-list-cycle/

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.
Return `true` if there is a cycle in the linked list. Otherwise, return `false`.

Strategy: Floyd's Cycle-Finding Algorithm (Fast & Slow Pointers)
- `slow` pointer advances 1 node per iteration.
- `fast` pointer advances 2 nodes per iteration.
- If there is no cycle, `fast` reaches the end (`None`).
- If there is a cycle, `fast` will inevitably lap and intersect with `slow`.

Time Complexity: O(n) - Linear time proportional to list size.
Space Complexity: O(1) - Two pointer variables only.
"""
import sys
from pathlib import Path
from typing import Optional

# Ensure parent directory is in sys.path for direct execution
sys.path.append(str(Path(__file__).resolve().parent.parent))

from common.list_node import ListNode


def has_cycle(head: Optional[ListNode]) -> bool:
    """
    Determines if a linked list contains a cycle using Floyd's algorithm.
    """
    if head is None or head.next is None:
        return False

    slow: Optional[ListNode] = head
    fast: Optional[ListNode] = head

    while fast is not None and fast.next is not None:
        slow = slow.next  # type: ignore
        fast = fast.next.next

        if slow is fast:
            return True

    return False


# Alias for camelCase
hasCycle = has_cycle


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    node1 = ListNode(3)
    node2 = ListNode(2)
    node3 = ListNode(0)
    node4 = ListNode(-4)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node2  # Cycle back to node 2

    print("Has Cycle (Test with cycle):", has_cycle(node1))  # Expected: True

    acyclic = ListNode(1, ListNode(2))
    print("Has Cycle (Test acyclic):", has_cycle(acyclic))    # Expected: False


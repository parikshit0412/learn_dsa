"""
Problem: #21 - Merge Two Sorted Lists (Easy)
LeetCode Link: https://leetcode.com/problems/merge-two-sorted-lists/

You are given the heads of two sorted linked lists `list1` and `list2`.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Strategy: Dummy Head + Iterative Splice
- Create a dummy prehead node to simplify edge cases.
- Compare values of `list1` and `list2`, attaching smaller node to `current.next`.
- When one list is exhausted, attach the remaining tail directly.

Time Complexity: O(n + m) - Where n and m are lengths of list1 and list2.
Space Complexity: O(1) - Rearranging existing nodes in-place.
"""
import sys
from pathlib import Path
from typing import Optional

# Ensure parent directory is in sys.path for direct execution
sys.path.append(str(Path(__file__).resolve().parent.parent))

from common.list_node import ListNode, create_linked_list, linked_list_to_array


def merge_two_lists(
    list1: Optional[ListNode], list2: Optional[ListNode]
) -> Optional[ListNode]:
    """
    Merges two sorted linked lists into one sorted list.
    """
    dummy_head = ListNode(-1)
    current = dummy_head

    while list1 is not None and list2 is not None:
        if list1.val <= list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next

    # Attach remaining non-empty sublist
    if list1 is not None:
        current.next = list1
    elif list2 is not None:
        current.next = list2

    return dummy_head.next


# Alias for camelCase
mergeTwoLists = merge_two_lists


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    l1 = create_linked_list([1, 2, 4])
    l2 = create_linked_list([1, 3, 4])
    merged = merge_two_lists(l1, l2)
    print("Merged List:", linked_list_to_array(merged))  # Expected: [1, 1, 2, 3, 4, 4]


"""
Problem: #19 - Remove Nth Node From End of List (Medium)
LeetCode Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

Strategy: Two Pointers with Dummy Head (Single Pass)
1. Introduce a dummy node pointing to `head` to handle removal of the 1st node cleanly.
2. Advance `fast` pointer `n + 1` steps ahead so the gap between `fast` and `slow` is `n + 1`.
3. Move both `fast` and `slow` forward together until `fast` reaches `None`.
4. `slow` will now point directly to the node BEFORE the one to be deleted (`slow.next = slow.next.next`).

Time Complexity: O(L) - Exactly one pass through list of length L.
Space Complexity: O(1) - Constant auxiliary memory.
"""
import sys
from pathlib import Path
from typing import Optional

# Ensure parent directory is in sys.path for direct execution
sys.path.append(str(Path(__file__).resolve().parent.parent))

from common.list_node import ListNode, create_linked_list, linked_list_to_array


def remove_nth_from_end(head: Optional[ListNode], n: int) -> Optional[ListNode]:
    """
    Removes the nth node from the end of the list in a single pass.
    """
    dummy = ListNode(0, head)
    fast: Optional[ListNode] = dummy
    slow: Optional[ListNode] = dummy

    # Advance fast pointer n + 1 times
    for _ in range(n + 1):
        if fast is not None:
            fast = fast.next

    # Move fast to the end, maintaining gap with slow
    while fast is not None:
        fast = fast.next
        slow = slow.next  # type: ignore

    # slow.next is the nth node from the end -> bypass it
    if slow is not None and slow.next is not None:
        slow.next = slow.next.next

    return dummy.next


# Alias for camelCase
removeNthFromEnd = remove_nth_from_end


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    list1 = create_linked_list([1, 2, 3, 4, 5])
    result1 = remove_nth_from_end(list1, 2)
    print("Remove 2nd from end ([1,2,3,4,5]):", linked_list_to_array(result1))
    # Expected: [1, 2, 3, 5]

    list2 = create_linked_list([1])
    result2 = remove_nth_from_end(list2, 1)
    print("Remove 1st from end ([1]):", linked_list_to_array(result2))
    # Expected: []


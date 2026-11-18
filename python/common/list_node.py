"""
Definition for singly-linked list node and helper utilities.
"""
from typing import Optional, List


class ListNode:
    """Definition for singly-linked list node."""

    def __init__(self, val: int = 0, next: Optional["ListNode"] = None):
        self.val = val
        self.next = next

    def __repr__(self) -> str:
        return f"ListNode({self.val})"


def create_linked_list(values: List[int]) -> Optional[ListNode]:
    """
    Helper function to create a Linked List from a list of numbers.

    :param values: List of numbers to convert into a Linked List
    :return: Head of the newly created Linked List, or None if input is empty
    """
    if not values:
        return None

    head = ListNode(values[0])
    current = head

    for val in values[1:]:
        current.next = ListNode(val)
        current = current.next

    return head


def linked_list_to_array(head: Optional[ListNode]) -> List[int]:
    """
    Helper function to convert a Linked List back to a list for easy inspection and testing.

    :param head: Head node of the Linked List
    :return: List representation of node values in order
    """
    result: List[int] = []
    current = head

    while current is not None:
        result.append(current.val)
        current = current.next

    return result


# Aliases for camelCase compatibility with TypeScript conventions
createLinkedList = create_linked_list
linkedListToArray = linked_list_to_array


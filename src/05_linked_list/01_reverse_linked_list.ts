import { ListNode, createLinkedList, linkedListToArray } from '../common/ListNode.js';

/**
 * Problem: #206 - Reverse Linked List (Easy)
 * LeetCode Link: https://leetcode.com/problems/reverse-linked-list/
 * 
 * Given the `head` of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Strategy: Iterative Three-Pointer Approach
 * - `prev`: tracks previous node (initialized to null).
 * - `curr`: tracks current node being redirected (starts at head).
 * - `nextTemp`: temporarily stores `curr.next` before reversing pointer direction.
 * 
 * Time Complexity: O(n) - Single pass through the n-node linked list.
 * Space Complexity: O(1) - Constant auxiliary memory.
 */

export function reverseList(head: ListNode | null): ListNode | null {
  // `prev` will eventually become the new head of the reversed list
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  // Traverse the list until reaching the end
  while (curr !== null) {
    // 1. Temporarily store reference to the next node
    const nextTemp: ListNode | null = curr.next;

    // 2. Reverse current node's pointer to face previous node
    curr.next = prev;

    // 3. Advance `prev` pointer forward to current node
    prev = curr;

    // 4. Advance `curr` pointer forward to the next node
    curr = nextTemp;
  }

  // `prev` is now pointing to the last visited node, which is the new head
  return prev;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const list1 = createLinkedList([1, 2, 3, 4, 5]);
  const reversed1 = reverseList(list1);
  console.log('Reversed List 1:', linkedListToArray(reversed1)); // Expected: [5, 4, 3, 2, 1]

  const list2 = createLinkedList([1, 2]);
  const reversed2 = reverseList(list2);
  console.log('Reversed List 2:', linkedListToArray(reversed2)); // Expected: [2, 1]
}

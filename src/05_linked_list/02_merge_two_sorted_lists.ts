import { ListNode, createLinkedList, linkedListToArray } from '../common/ListNode.js';

/**
 * Problem: #21 - Merge Two Sorted Lists (Easy)
 * LeetCode Link: https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * You are given the heads of two sorted linked lists `list1` and `list2`.
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * 
 * Strategy: Dummy Head + Iterative Splice
 * - Create a dummy prehead node to simplify edge cases with empty lists or head changes.
 * - Compare values of `list1` and `list2`, attaching the smaller node to `current.next`.
 * - When one list is exhausted, attach the remaining tail directly.
 * 
 * Time Complexity: O(n + m) - Where n and m are lengths of list1 and list2.
 * Space Complexity: O(1) - Rearranging existing nodes in-place.
 */

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Dummy node acts as a fixed anchor before the head of the new merged list
  const dummyHead = new ListNode(-1);
  let current = dummyHead;

  // Compare elements while both lists have nodes remaining
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      // Connect list1 node
      current.next = list1;
      // Advance list1 pointer
      list1 = list1.next;
    } else {
      // Connect list2 node
      current.next = list2;
      // Advance list2 pointer
      list2 = list2.next;
    }
    // Advance merged list pointer
    current = current.next;
  }

  // Attach the remaining non-empty sublist (if any)
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  // The merged list begins immediately after dummy head
  return dummyHead.next;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const l1 = createLinkedList([1, 2, 4]);
  const l2 = createLinkedList([1, 3, 4]);
  const merged = mergeTwoLists(l1, l2);
  console.log('Merged List:', linkedListToArray(merged)); // Expected: [1, 1, 2, 3, 4, 4]
}

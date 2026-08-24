import { ListNode, createLinkedList, linkedListToArray } from '../common/ListNode.js';

/**
 * Problem: #19 - Remove Nth Node From End of List (Medium)
 * LeetCode Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * 
 * Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.
 * 
 * Strategy: Two Pointers with Dummy Head (Single Pass)
 * 1. Introduce a dummy node pointing to `head` to handle removal of the 1st node cleanly.
 * 2. Advance `fast` pointer `n + 1` steps ahead so the gap between `fast` and `slow` is `n + 1`.
 * 3. Move both `fast` and `slow` forward together until `fast` reaches `null`.
 * 4. `slow` will now point directly to the node BEFORE the one to be deleted (`slow.next = slow.next.next`).
 * 
 * Time Complexity: O(L) - Exactly one pass through list of length L.
 * Space Complexity: O(1) - Constant auxiliary memory.
 */

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Dummy node allows edge cases (like deleting head node) to be treated uniformly
  const dummy = new ListNode(0, head);

  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  // Advance fast pointer n + 1 times to establish an (n + 1) node gap
  for (let i = 0; i <= n; i++) {
    if (fast !== null) {
      fast = fast.next;
    }
  }

  // Move fast to the end, maintaining the gap with slow
  while (fast !== null) {
    fast = fast.next;
    slow = slow!.next;
  }

  // slow.next is the nth node from the end -> bypass it to delete it
  if (slow !== null && slow.next !== null) {
    slow.next = slow.next.next;
  }

  // Return new head of the list
  return dummy.next;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const list1 = createLinkedList([1, 2, 3, 4, 5]);
  const result1 = removeNthFromEnd(list1, 2);
  console.log('Remove 2nd from end ([1,2,3,4,5]):', linkedListToArray(result1)); // Expected: [1, 2, 3, 5]

  const list2 = createLinkedList([1]);
  const result2 = removeNthFromEnd(list2, 1);
  console.log('Remove 1st from end ([1]):', linkedListToArray(result2)); // Expected: []
}

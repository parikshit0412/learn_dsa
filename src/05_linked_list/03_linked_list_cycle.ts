import { ListNode } from '../common/ListNode.js';

/**
 * Problem: #141 - Linked List Cycle (Easy)
 * LeetCode Link: https://leetcode.com/problems/linked-list-cycle/
 * 
 * Given `head`, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.
 * Return `true` if there is a cycle in the linked list. Otherwise, return `false`.
 * 
 * Strategy: Floyd's Cycle-Finding Algorithm (Fast & Slow Pointers)
 * - `slow` pointer advances 1 node per iteration.
 * - `fast` pointer advances 2 nodes per iteration.
 * - If there is no cycle, `fast` reaches the end (`null`).
 * - If there is a cycle, `fast` will inevitably lap and intersect with `slow`.
 * 
 * Time Complexity: O(n) - Linear time proportional to list size.
 * Space Complexity: O(1) - Two pointer variables only.
 */

export function hasCycle(head: ListNode | null): boolean {
  // If list is empty or has only one unlinked node, no cycle can exist
  if (head === null || head.next === null) {
    return false;
  }

  // Slow moves 1 step at a time
  let slow: ListNode | null = head;
  // Fast moves 2 steps at a time
  let fast: ListNode | null = head;

  // Traverse list as long as fast pointer and its next node exist
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;          // Move slow pointer 1 step forward
    fast = fast.next.next;      // Move fast pointer 2 steps forward

    // If fast and slow reference the exact same node in memory, a cycle exists
    if (slow === fast) {
      return true;
    }
  }

  // Fast pointer reached end of list (null) -> no cycle exists
  return false;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  // Create a cyclic list manually: 3 -> 2 -> 0 -> -4 -> (loops to 2)
  const node1 = new ListNode(3);
  const node2 = new ListNode(2);
  const node3 = new ListNode(0);
  const node4 = new ListNode(-4);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2; // Cycle back to node 2

  console.log('Has Cycle (Test with cycle):', hasCycle(node1)); // Expected: true

  // Acyclic list: 1 -> 2 -> null
  const acyclic = new ListNode(1, new ListNode(2));
  console.log('Has Cycle (Test acyclic):', hasCycle(acyclic));   // Expected: false
}

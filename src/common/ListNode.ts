/**
 * Definition for singly-linked list node.
 */
export class ListNode {
  // Value stored in the current node
  val: number;
  // Reference to the next node in the list (null if it's the last node)
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Helper function to create a Linked List from an array of numbers.
 * 
 * @param values Array of numbers to convert into a Linked List
 * @returns Head of the newly created Linked List, or null if input is empty
 */
export function createLinkedList(values: number[]): ListNode | null {
  // If array is empty, return null
  if (values.length === 0) return null;

  // Create the head node with the first value
  const head = new ListNode(values[0]);
  let current = head;

  // Iterate over remaining values and append new nodes
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  // Return the starting node of the list
  return head;
}

/**
 * Helper function to convert a Linked List back to an array for easy inspection and testing.
 * 
 * @param head Head node of the Linked List
 * @returns Array representation of node values in order
 */
export function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;

  // Traverse each node until the end (null)
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

/**
 * Problem: #146 - LRU Cache (Medium - Very High Frequency)
 * LeetCode Link: https://leetcode.com/problems/lru-cache/
 * 
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 * Implement the `LRUCache` class:
 * - `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.
 * - `int get(int key)` Return value of key if exists, otherwise return -1.
 * - `void put(int key, int value)` Update value of key if exists. Otherwise, add key-value pair.
 *   If number of keys exceeds capacity, evict the least recently used key.
 * The functions get and put must each run in O(1) average time complexity.
 * 
 * Strategy: Hash Map + Doubly Linked List
 * - Hash Map provides O(1) key-to-node lookup.
 * - Doubly Linked List provides O(1) removal and insertion of nodes.
 * - Sentinel (dummy) `head` and `tail` nodes eliminate edge cases during insertion/removal.
 * - Most Recently Used (MRU) node placed right before `tail`.
 * - Least Recently Used (LRU) node is right after `head`.
 */

// Internal Doubly Linked List Node class
class DNode {
  key: number;
  val: number;
  prev: DNode | null;
  next: DNode | null;

  constructor(key: number = 0, val: number = 0) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

export class LRUCache {
  private capacity: number;
  private cache: Map<number, DNode>;
  private head: DNode; // Dummy head (LRU sentinel)
  private tail: DNode; // Dummy tail (MRU sentinel)

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map<number, DNode>();

    // Initialize dummy head and tail sentinels
    this.head = new DNode();
    this.tail = new DNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * Helper method to remove an arbitrary node from the doubly linked list.
   */
  private removeNode(node: DNode): void {
    const prevNode = node.prev!;
    const nextNode = node.next!;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  /**
   * Helper method to insert a node at the most recent position (just before tail).
   */
  private addNodeToMRU(node: DNode): void {
    const prevToTail = this.tail.prev!;

    prevToTail.next = node;
    node.prev = prevToTail;

    node.next = this.tail;
    this.tail.prev = node;
  }

  /**
   * Helper method to move an existing node to the MRU position.
   */
  private moveToMRU(node: DNode): void {
    this.removeNode(node);
    this.addNodeToMRU(node);
  }

  /**
   * Returns value for key if present; marks node as most recently used.
   */
  get(key: number): number {
    // If key is not in cache, return -1
    if (!this.cache.has(key)) {
      return -1;
    }

    // Retrieve node from map
    const node = this.cache.get(key)!;

    // Mark accessed node as most recently used
    this.moveToMRU(node);

    return node.val;
  }

  /**
   * Inserts or updates key-value pair; evicts LRU node if capacity is exceeded.
   */
  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      // Key already exists -> update its value and move to MRU
      const existingNode = this.cache.get(key)!;
      existingNode.val = value;
      this.moveToMRU(existingNode);
    } else {
      // Create new node
      const newNode = new DNode(key, value);
      this.cache.set(key, newNode);
      this.addNodeToMRU(newNode);

      // If cache exceeds capacity, evict the least recently used node (node after head)
      if (this.cache.size > this.capacity) {
        const lruNode = this.head.next!;
        this.removeNode(lruNode);
        this.cache.delete(lruNode.key);
      }
    }
  }
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const lru = new LRUCache(2);
  lru.put(1, 1); // cache is {1=1}
  lru.put(2, 2); // cache is {1=1, 2=2}
  console.log('get(1):', lru.get(1)); // returns 1 (marks 1 as MRU)
  lru.put(3, 3); // evicts key 2, cache is {1=1, 3=3}
  console.log('get(2):', lru.get(2)); // returns -1 (not found)
  lru.put(4, 4); // evicts key 1, cache is {4=4, 3=3}
  console.log('get(1):', lru.get(1)); // returns -1 (not found)
  console.log('get(3):', lru.get(3)); // returns 3
  console.log('get(4):', lru.get(4)); // returns 4
}

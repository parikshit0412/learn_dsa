"""
Problem: #146 - LRU Cache (Medium - Very High Frequency)
LeetCode Link: https://leetcode.com/problems/lru-cache/

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Implement the `LRUCache` class:
- `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.
- `int get(int key)` Return value of key if exists, otherwise return -1.
- `void put(int key, int value)` Update value of key if exists. Otherwise, add key-value pair.
  If number of keys exceeds capacity, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

Strategy: Hash Map + Doubly Linked List
- Hash Map provides O(1) key-to-node lookup.
- Doubly Linked List provides O(1) removal and insertion of nodes.
- Sentinel (dummy) `head` and `tail` nodes eliminate edge cases during insertion/removal.
- Most Recently Used (MRU) node placed right before `tail`.
- Least Recently Used (LRU) node is right after `head`.
"""
from typing import Optional, Dict


class DNode:
    """Internal Doubly Linked List Node."""

    def __init__(self, key: int = 0, val: int = 0):
        self.key = key
        self.val = val
        self.prev: Optional["DNode"] = None
        self.next: Optional["DNode"] = None


class LRUCache:
    """
    Least Recently Used (LRU) Cache with O(1) get and put operations.
    """

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache: Dict[int, DNode] = {}

        # Sentinel nodes: head (LRU end) <-> tail (MRU end)
        self.head = DNode()
        self.tail = DNode()
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove_node(self, node: DNode) -> None:
        """Removes an arbitrary node from the doubly linked list."""
        prev_node = node.prev
        next_node = node.next
        if prev_node:
            prev_node.next = next_node
        if next_node:
            next_node.prev = prev_node

    def _add_node_to_mru(self, node: DNode) -> None:
        """Inserts a node at the most recent position (just before tail)."""
        prev_to_tail = self.tail.prev
        if prev_to_tail:
            prev_to_tail.next = node
            node.prev = prev_to_tail

        node.next = self.tail
        self.tail.prev = node

    def _move_to_mru(self, node: DNode) -> None:
        """Moves an existing node to the MRU position."""
        self._remove_node(node)
        self._add_node_to_mru(node)

    def get(self, key: int) -> int:
        """Returns value for key if present; marks node as most recently used."""
        if key not in self.cache:
            return -1

        node = self.cache[key]
        self._move_to_mru(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        """Inserts or updates key-value pair; evicts LRU node if capacity is exceeded."""
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self._move_to_mru(node)
        else:
            new_node = DNode(key, value)
            self.cache[key] = new_node
            self._add_node_to_mru(new_node)

            if len(self.cache) > self.capacity:
                lru_node = self.head.next
                if lru_node:
                    self._remove_node(lru_node)
                    del self.cache[lru_node.key]


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    lru = LRUCache(2)
    lru.put(1, 1)  # cache is {1=1}
    lru.put(2, 2)  # cache is {1=1, 2=2}
    print("get(1):", lru.get(1))  # returns 1 (marks 1 as MRU)
    lru.put(3, 3)  # evicts key 2, cache is {1=1, 3=3}
    print("get(2):", lru.get(2))  # returns -1 (not found)
    lru.put(4, 4)  # evicts key 1, cache is {4=4, 3=3}
    print("get(1):", lru.get(1))  # returns -1 (not found)
    print("get(3):", lru.get(3))  # returns 3
    print("get(4):", lru.get(4))  # returns 4


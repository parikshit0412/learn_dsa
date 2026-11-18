"""
Problem: #215 - Kth Largest Element in an Array (Medium)
LeetCode Link: https://leetcode.com/problems/kth-largest-element-in-an-array/
AI Relevance: Core primitive in LLM top-k token filtering, beam search candidate pruning,
              and retrieval scoring over vector similarity results.

Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.

Strategy: Min-Heap of size k
- Maintain a Min-Heap of size k.
- Push each element; if size exceeds k, pop minimum.
- Heap top holds kth largest element.

Time Complexity: O(n log k)
Space Complexity: O(k)
"""
import heapq
from typing import List


def find_kth_largest(nums: List[int], k: int) -> int:
    """
    Returns the kth largest element in nums using a min-heap of size k.
    """
    min_heap: List[int] = []

    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)

    return min_heap[0]


# Alias for camelCase
findKthLargest = find_kth_largest


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    print("Kth Largest ([3,2,1,5,6,4], k=2):", find_kth_largest([3, 2, 1, 5, 6, 4], 2))
    # Expected: 5
    print("Kth Largest ([3,2,3,1,2,4,5,5,6], k=4):", find_kth_largest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
    # Expected: 4


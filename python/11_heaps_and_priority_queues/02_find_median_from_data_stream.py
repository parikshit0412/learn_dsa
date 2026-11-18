"""
Problem: #295 - Find Median from Data Stream (Hard)
LeetCode Link: https://leetcode.com/problems/find-median-from-data-stream/
AI Relevance: Real-time latency tracking (p50 / median response time in streaming LLM APIs),
              online quantiles, and rolling percentile normalization.

Design a data structure that supports:
- `add_num(num)`: Adds integer to data stream.
- `find_median()`: Returns median of elements so far.

Strategy: Two Heaps (Max-Heap + Min-Heap)
- `small` (Max-heap, stored as negatives): smaller half of numbers.
- `large` (Min-heap): larger half of numbers.

Time Complexity: O(log n) for add_num, O(1) for find_median.
Space Complexity: O(n)
"""
import heapq
from typing import List


class MedianFinder:
    """Finds median from continuous data stream using two heaps."""

    def __init__(self):
        # Two heaps: large is a min-heap, small is a max-heap (values negated)
        self.small: List[int] = []  # max-heap
        self.large: List[int] = []  # min-heap

    def add_num(self, num: int) -> None:
        """Adds a number to the data structure."""
        # 1. Push to max-heap (negated)
        heapq.heappush(self.small, -num)

        # 2. Make sure every num in small <= every num in large
        if self.small and self.large and (-self.small[0]) > self.large[0]:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)

        # 3. Balance sizes: small can have at most 1 more element than large
        if len(self.small) > len(self.large) + 1:
            val = -heapq.heappop(self.small)
            heapq.heappush(self.large, val)
        elif len(self.large) > len(self.small):
            val = heapq.heappop(self.large)
            heapq.heappush(self.small, -val)

    def find_median(self) -> float:
        """Returns the median of current numbers."""
        if len(self.small) > len(self.large):
            return float(-self.small[0])
        return (-self.small[0] + self.large[0]) / 2.0

    # Aliases for camelCase
    addNum = add_num
    findMedian = find_median


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    mf = MedianFinder()
    mf.add_num(1)
    mf.add_num(2)
    print("Median after [1, 2]:", mf.find_median())      # Expected: 1.5
    mf.add_num(3)
    print("Median after [1, 2, 3]:", mf.find_median())   # Expected: 2.0


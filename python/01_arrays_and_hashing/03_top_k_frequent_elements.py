"""
Problem: #347 - Top K Frequent Elements (Medium)
LeetCode Link: https://leetcode.com/problems/top-k-frequent-elements/

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.
You may return the answer in any order.

Optimal Strategy: Bucket Sort Approach
1. Count frequency of each number using a hash map / Counter.
2. Create frequency buckets (list of lists) where index = frequency count.
3. Iterate backwards from highest frequency bucket and gather top k elements.

Time Complexity: O(n) - Linear pass for counting and bucket population.
Space Complexity: O(n) - Storage for frequency map and buckets.
"""
from collections import Counter
from typing import List


def top_k_frequent(nums: List[int], k: int) -> List[int]:
    """
    Returns the k most frequent elements in nums using bucket sort.
    """
    # Step 1: Count frequency of each number
    count_map = Counter(nums)

    # Step 2: Create buckets array where index represents frequency count (0 to n)
    # buckets[f] contains list of all numbers that appear exactly f times
    buckets: List[List[int]] = [[] for _ in range(len(nums) + 1)]
    for num, count in count_map.items():
        buckets[count].append(num)

    # Step 3: Iterate backwards from highest frequency bucket to gather top k elements
    result: List[int] = []
    for freq in range(len(buckets) - 1, 0, -1):
        for num in buckets[freq]:
            result.append(num)
            if len(result) == k:
                return result

    return result


# Alias for camelCase
topKFrequent = top_k_frequent


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    nums1 = [1, 1, 1, 2, 2, 3]
    k1 = 2
    print("Top K Frequent (Test 1):", top_k_frequent(nums1, k1))  # Expected: [1, 2]

    nums2 = [1]
    k2 = 1
    print("Top K Frequent (Test 2):", top_k_frequent(nums2, k2))  # Expected: [1]


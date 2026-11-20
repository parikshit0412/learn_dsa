"""
Problem: #347 - Top K Frequent Elements (Medium)
LeetCode Link: https://leetcode.com/problems/top-k-frequent-elements/

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.
You may return the answer in any order.

Approach 1 (Optimal): Bucket Sort Approach
Time Complexity: O(n) - Linear pass for counting and bucket population.
Space Complexity: O(n) - Storage for frequency map and buckets.

Approach 2 (Second Opinion / Baseline): Hash Map + Sorting
Time Complexity: O(n log n) or O(m log m) where m is count of unique elements.
Space Complexity: O(n)
"""
from collections import Counter
from typing import List


# --- Approach 1: Bucket Sort (Optimal O(n) Time) ---
def top_k_frequent(nums: List[int], k: int) -> List[int]:
    """
    Returns the k most frequent elements in nums using bucket sort.
    """
    # Step 1: Count frequency of each number
    count_map = Counter(nums)

    # Step 2: Create buckets array where index represents frequency count (0 to n)
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


# --- Approach 2 (Second Opinion): Hash Map + Sorting (O(n log n) Time) ---
def top_k_frequent_sorting(nums: List[int], k: int) -> List[int]:
    """
    Returns top k frequent elements using frequency map + sorting.
    """
    count_map = Counter(nums)
    # Sort pairs by frequency count descending, slice top k, extract keys
    sorted_pairs = sorted(count_map.items(), key=lambda item: item[1], reverse=True)
    return [num for num, _ in sorted_pairs[:k]]


# Aliases for camelCase
topKFrequent = top_k_frequent
topKFrequentSorting = top_k_frequent_sorting


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    nums1 = [1, 1, 1, 2, 2, 3]
    k1 = 2
    print("--- Approach 1 (Bucket Sort O(n)) ---")
    print("Top K Frequent (Test 1):", top_k_frequent(nums1, k1))  # Expected: [1, 2]

    nums2 = [1]
    k2 = 1
    print("Top K Frequent (Test 2):", top_k_frequent(nums2, k2))  # Expected: [1]

    print("\n--- Approach 2 (Map + Sort O(n log n)) ---")
    print("Top K Frequent Sorting (Test 1):", top_k_frequent_sorting(nums1, k1))  # Expected: [1, 2]
    print("Top K Frequent Sorting (Test 2):", top_k_frequent_sorting(nums2, k2))  # Expected: [1]

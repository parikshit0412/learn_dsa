"""
Problem: #49 - Group Anagrams (Medium)
LeetCode Link: https://leetcode.com/problems/group-anagrams/

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.
An Anagram is a word formed by rearranging the letters of a different word, typically using all the original letters exactly once.

Time Complexity: O(n * k * log(k)) where n is number of strings, k is max length of a string (sorting method).
Space Complexity: O(n * k) to store strings in map buckets.
"""
from collections import defaultdict
from typing import List


def group_anagrams(strs: List[str]) -> List[List[str]]:
    """
    Groups words that are anagrams of each other.
    """
    # Map where key is the sorted character signature (canonical form),
    # and value is a list of strings that share this signature.
    anagram_map = defaultdict(list)

    # Iterate over every string in the input list
    for s in strs:
        # Sort characters alphabetically as the canonical key
        sorted_key = "".join(sorted(s))
        anagram_map[sorted_key].append(s)

    # Convert dictionary values (all anagram groups) into a list of lists
    return list(anagram_map.values())


# Alias for camelCase
groupAnagrams = group_anagrams


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    print("Group Anagrams Result:", group_anagrams(strs))
    # Expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] (order can vary)


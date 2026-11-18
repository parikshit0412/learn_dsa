"""
Problem: #3 - Longest Substring Without Repeating Characters (Medium)
LeetCode Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string `s`, find the length of the longest substring without repeating characters.

Strategy: Dynamic Sliding Window with Character Index Map
- Maintain a window `[left, right]`.
- Use a dict to store the most recent index where each character was observed.
- When `s[right]` is already inside current window (`last_seen_index >= left`),
  shift `left` directly past the previous occurrence (`last_seen_index + 1`).
- Update maximum window length at each step.

Time Complexity: O(n) - Single pass where both pointers move forward monotonically.
Space Complexity: O(min(m, n)) - Where m is character set size and n is string length.
"""


def length_of_longest_substring(s: str) -> int:
    """
    Finds the length of the longest substring without repeating characters.
    """
    char_last_index_map = {}
    max_length = 0
    left = 0

    for right, char in enumerate(s):
        # If character was seen and its last index is inside the current window
        if char in char_last_index_map:
            last_seen_index = char_last_index_map[char]
            if last_seen_index >= left:
                left = last_seen_index + 1

        char_last_index_map[char] = right
        max_length = max(max_length, right - left + 1)

    return max_length


# Alias for camelCase
lengthOfLongestSubstring = length_of_longest_substring


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    s1 = "abcabcbb"
    print("Length of Longest Substring (Test 1):", length_of_longest_substring(s1))  # Expected: 3 ("abc")

    s2 = "bbbbb"
    print("Length of Longest Substring (Test 2):", length_of_longest_substring(s2))  # Expected: 1 ("b")

    s3 = "pwwkew"
    print("Length of Longest Substring (Test 3):", length_of_longest_substring(s3))  # Expected: 3 ("wke")


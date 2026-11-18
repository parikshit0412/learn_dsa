"""
Problem: #424 - Longest Repeating Character Replacement (Medium)
LeetCode Link: https://leetcode.com/problems/longest-repeating-character-replacement/

You are given a string `s` and an integer `k`. You can choose any character of the string
and change it to any other uppercase English character. You can perform this operation at most `k` times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Strategy: Sliding Window with Frequency Array/Map
- In any valid window: `(window_length - max_frequency_of_single_char) <= k`
- If invalid, shrink window from `left` until valid again.
- We only need to expand `max_freq` when a higher frequency character is found.

Time Complexity: O(n) - Left and right pointers iterate through string once.
Space Complexity: O(1) - Fixed size array of 26 uppercase English letters.
"""


def character_replacement(s: str, k: int) -> int:
    """
    Finds length of longest substring with same letter possible with at most k replacements.
    """
    count = [0] * 26
    left = 0
    max_freq = 0
    max_length = 0

    for right in range(len(s)):
        char_index = ord(s[right]) - ord("A")
        count[char_index] += 1

        # Update maximum frequency of any character within the current window
        max_freq = max(max_freq, count[char_index])

        # Current window size is (right - left + 1)
        # If replacements needed exceed k, shrink window from left
        while (right - left + 1) - max_freq > k:
            left_char_index = ord(s[left]) - ord("A")
            count[left_char_index] -= 1
            left += 1

        max_length = max(max_length, right - left + 1)

    return max_length


# Alias for camelCase
characterReplacement = character_replacement


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    s1 = "ABAB"
    k1 = 2
    print("Character Replacement (Test 1):", character_replacement(s1, k1))  # Expected: 4

    s2 = "AABABBA"
    k2 = 1
    print("Character Replacement (Test 2):", character_replacement(s2, k2))  # Expected: 4


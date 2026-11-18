"""
Problem: #125 - Valid Palindrome (Easy)
LeetCode Link: https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.

Strategy: Two Pointers (Left and Right)
- Move left pointer rightward skipping non-alphanumeric characters.
- Move right pointer leftward skipping non-alphanumeric characters.
- Compare lowercase characters at both pointers.

Time Complexity: O(n) - Single pass from both ends.
Space Complexity: O(1) - In-place pointer comparison without extra string allocation.
"""


def is_palindrome(s: str) -> bool:
    """
    Determines if a string is a palindrome considering only alphanumeric characters and ignoring cases.
    """
    left = 0
    right = len(s) - 1

    while left < right:
        # Advance left pointer past any non-alphanumeric characters
        while left < right and not s[left].isalnum():
            left += 1

        # Move right pointer past any non-alphanumeric characters
        while left < right and not s[right].isalnum():
            right -= 1

        # Compare characters in lowercase
        if s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True


# Alias for camelCase
isPalindrome = is_palindrome


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    s1 = "A man, a plan, a canal: Panama"
    print("Is Palindrome (Test 1):", is_palindrome(s1))  # Expected: True

    s2 = "race a car"
    print("Is Palindrome (Test 2):", is_palindrome(s2))  # Expected: False


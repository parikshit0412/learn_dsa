"""
Problem: #20 - Valid Parentheses (Easy)
LeetCode Link: https://leetcode.com/problems/valid-parentheses/

Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Strategy: Stack Data Structure (LIFO)
- Map closing brackets to their corresponding opening brackets.
- When encountering an opening bracket, push to stack.
- When encountering a closing bracket, pop from stack and check if it matches.

Time Complexity: O(n) - Single pass through string of length n.
Space Complexity: O(n) - Stack can store up to n characters in worst case.
"""


def is_valid(s: str) -> bool:
    """
    Validates if brackets in string s are correctly paired and closed.
    """
    # Quick parity check: odd length strings can never have all balanced pairs
    if len(s) % 2 != 0:
        return False

    stack = []
    matching_pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    for char in s:
        # If character is a closing bracket
        if char in matching_pairs:
            top = stack.pop() if stack else ""
            if top != matching_pairs[char]:
                return False
        else:
            # It is an opening bracket
            stack.append(char)

    return len(stack) == 0


# Alias for camelCase
isValid = is_valid


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    print('Is Valid "()" :', is_valid("()"))          # Expected: True
    print('Is Valid "()[]{}" :', is_valid("()[]{}"))  # Expected: True
    print('Is Valid "(]" :', is_valid("(]"))          # Expected: False
    print('Is Valid "([)]" :', is_valid("([)]"))      # Expected: False


/**
 * Problem: #20 - Valid Parentheses (Easy)
 * LeetCode Link: https://leetcode.com/problems/valid-parentheses/
 * 
 * Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Strategy: Stack Data Structure (LIFO)
 * - Map closing brackets to their corresponding opening brackets.
 * - When encountering an opening bracket, push to stack.
 * - When encountering a closing bracket, pop from stack and check if it matches.
 * 
 * Time Complexity: O(n) - Single pass through string of length n.
 * Space Complexity: O(n) - Stack can store up to n characters in worst case (e.g. "(((").
 */

export function isValid(s: string): boolean {
  // Quick parity check: odd length strings can never have all balanced pairs
  if (s.length % 2 !== 0) return false;

  // Stack to store opening brackets
  const stack: string[] = [];

  // Mapping from closing bracket -> matching opening bracket
  const matchingPairs: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  // Iterate over each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If character is a closing bracket (it is a key in matchingPairs)
    if (char in matchingPairs) {
      // Pop the top opening bracket from the stack (or empty string if stack is empty)
      const top = stack.pop();

      // Check if popped bracket matches the required opening bracket
      if (top !== matchingPairs[char]) {
        return false;
      }
    } else {
      // It is an opening bracket -> push onto stack
      stack.push(char);
    }
  }

  // If stack is completely empty, all brackets were correctly matched and closed
  return stack.length === 0;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  console.log('Is Valid "()" :', isValid("()")); // Expected: true
  console.log('Is Valid "()[]{}" :', isValid("()[]{}")); // Expected: true
  console.log('Is Valid "(]" :', isValid("(]")); // Expected: false
  console.log('Is Valid "([)]" :', isValid("([)]")); // Expected: false
}

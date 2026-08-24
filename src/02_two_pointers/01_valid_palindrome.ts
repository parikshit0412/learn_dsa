/**
 * Problem: #125 - Valid Palindrome (Easy)
 * LeetCode Link: https://leetcode.com/problems/valid-palindrome/
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * 
 * Strategy: Two Pointers (Left and Right)
 * - Move left pointer rightward skipping non-alphanumeric characters.
 * - Move right pointer leftward skipping non-alphanumeric characters.
 * - Compare lowercase characters at both pointers.
 * 
 * Time Complexity: O(n) - Single pass from both ends.
 * Space Complexity: O(1) - In-place pointer comparison without extra string allocation.
 */

// Helper to check if a character is alphanumeric without regex overhead
function isAlphanumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||  // Numeric 0-9
    (code >= 65 && code <= 90) ||  // Uppercase A-Z
    (code >= 97 && code <= 122)    // Lowercase a-z
  );
}

export function isPalindrome(s: string): boolean {
  // Initialize left pointer at start, right pointer at end of string
  let left = 0;
  let right = s.length - 1;

  // Continue checking until pointers cross each other
  while (left < right) {
    // Advance left pointer past any non-alphanumeric characters
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    // Move right pointer past any non-alphanumeric characters
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    // Compare characters in lowercase
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      // Mismatch found -> not a palindrome
      return false;
    }

    // Move both pointers inward for the next comparison
    left++;
    right--;
  }

  // All characters matched successfully
  return true;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const s1 = "A man, a plan, a canal: Panama";
  console.log('Is Palindrome (Test 1):', isPalindrome(s1)); // Expected: true

  const s2 = "race a car";
  console.log('Is Palindrome (Test 2):', isPalindrome(s2)); // Expected: false
}

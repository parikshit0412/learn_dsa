/**
 * Problem: #3 - Longest Substring Without Repeating Characters (Medium)
 * LeetCode Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * Given a string `s`, find the length of the longest substring without repeating characters.
 * 
 * Strategy: Dynamic Sliding Window with Character Index Map
 * - Maintain a window `[left, right]`.
 * - Use a map to store the most recent index where each character was observed.
 * - When `s[right]` is already inside the current window (`lastSeenIndex >= left`),
 *   shift `left` directly past the previous occurrence (`lastSeenIndex + 1`).
 * - Update maximum window length at each step.
 * 
 * Time Complexity: O(n) - Single pass where both pointers move forward monotonically.
 * Space Complexity: O(min(m, n)) - Where m is character set size and n is string length.
 */

export function lengthOfLongestSubstring(s: string): number {
  // Map character -> its most recently seen index in the string
  const charLastIndexMap = new Map<string, number>();

  let maxLength = 0;
  let left = 0; // Left boundary of sliding window

  // Expand the right boundary of the window one character at a time
  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If character was seen and its last index is inside the current window
    if (charLastIndexMap.has(char)) {
      const lastSeenIndex = charLastIndexMap.get(char)!;
      if (lastSeenIndex >= left) {
        // Move window start just past the previous occurrence
        left = lastSeenIndex + 1;
      }
    }

    // Update the character's newest position
    charLastIndexMap.set(char, right);

    // Calculate current window size and update max length
    const currentWindowLength = right - left + 1;
    maxLength = Math.max(maxLength, currentWindowLength);
  }

  return maxLength;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const s1 = "abcabcbb";
  console.log('Length of Longest Substring (Test 1):', lengthOfLongestSubstring(s1)); // Expected: 3 ("abc")

  const s2 = "bbbbb";
  console.log('Length of Longest Substring (Test 2):', lengthOfLongestSubstring(s2)); // Expected: 1 ("b")

  const s3 = "pwwkew";
  console.log('Length of Longest Substring (Test 3):', lengthOfLongestSubstring(s3)); // Expected: 3 ("wke")
}

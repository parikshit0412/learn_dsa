/**
 * Problem: #424 - Longest Repeating Character Replacement (Medium)
 * LeetCode Link: https://leetcode.com/problems/longest-repeating-character-replacement/
 * 
 * You are given a string `s` and an integer `k`. You can choose any character of the string
 * and change it to any other uppercase English character. You can perform this operation at most `k` times.
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 * 
 * Strategy: Sliding Window with Frequency Map
 * - In any valid window: `(windowLength - maxFrequencyOfSingleChar) <= k`
 * - If invalid, shrink window from `left` until valid again.
 * - We only need to expand `maxFreq` when a higher frequency character is found.
 * 
 * Time Complexity: O(n) - Left and right pointers iterate through string once.
 * Space Complexity: O(1) or O(26) - Fixed array or map for 26 uppercase English letters.
 */

export function characterReplacement(s: string, k: number): number {
  // Array of size 26 to store frequency of each letter 'A'-'Z' in current window
  const count = new Array(26).fill(0);

  let left = 0;
  let maxFreq = 0; // Most frequent character count in current window
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // Convert character 'A'-'Z' into 0-25 index
    const charIndex = s.charCodeAt(right) - 65; // 'A' char code is 65
    count[charIndex]++;

    // Update the maximum frequency of any character within the current window
    maxFreq = Math.max(maxFreq, count[charIndex]);

    // Current window size is (right - left + 1)
    // Number of replacements needed is: (currentWindowSize - maxFreq)
    // If replacements needed exceed k, the window is invalid -> shrink from left
    while ((right - left + 1) - maxFreq > k) {
      const leftCharIndex = s.charCodeAt(left) - 65;
      count[leftCharIndex]--;
      left++;
    }

    // Update longest valid window found
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const s1 = "ABAB";
  const k1 = 2;
  console.log('Character Replacement (Test 1):', characterReplacement(s1, k1)); // Expected: 4

  const s2 = "AABABBA";
  const k2 = 1;
  console.log('Character Replacement (Test 2):', characterReplacement(s2, k2)); // Expected: 4
}

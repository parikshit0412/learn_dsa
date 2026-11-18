/**
 * Problem: #72 - Edit Distance (Levenshtein Distance) (Medium/Hard)
 * LeetCode Link: https://leetcode.com/problems/edit-distance/
 * AI Relevance: The fundamental metric for Word Error Rate (WER) in Speech AI (Whisper),
 *               LLM hallucination measurement, spell checking, and fuzzy entity deduplication.
 * 
 * Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`.
 * You have the following three operations permitted on a word:
 * 1. Insert a character
 * 2. Delete a character
 * 3. Replace a character
 * 
 * Strategy: 2D Dynamic Programming (Bottom-Up)
 * - Let `dp[i][j]` = min operations to convert `word1[0...i-1]` to `word2[0...j-1]`.
 * - Base Cases:
 *   - Converting empty string to `word2[0...j-1]` requires `j` insertions: `dp[0][j] = j`.
 *   - Converting `word1[0...i-1]` to empty string requires `i` deletions: `dp[i][0] = i`.
 * - Transitions:
 *   - If `word1[i - 1] === word2[j - 1]`:
 *       `dp[i][j] = dp[i - 1][j - 1]` (no operation needed)
 *   - Else:
 *       `dp[i][j] = 1 + Math.min(`
 *           `dp[i - 1][j],`     // Delete from word1
 *           `dp[i][j - 1],`     // Insert into word1
 *           `dp[i - 1][j - 1]`  // Replace in word1
 *       `)`
 * 
 * Time Complexity: O(m * n) where m = word1.length, n = word2.length.
 * Space Complexity: O(m * n).
 */

export function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  // Base cases
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],    // Delete
          dp[i][j - 1],    // Insert
          dp[i - 1][j - 1] // Replace
        );
      }
    }
  }

  return dp[m][n];
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  console.log('Edit Distance ("horse", "ros"):', minDistance("horse", "ros")); // Expected: 3
  console.log('Edit Distance ("intention", "execution"):', minDistance("intention", "execution")); // Expected: 5
}


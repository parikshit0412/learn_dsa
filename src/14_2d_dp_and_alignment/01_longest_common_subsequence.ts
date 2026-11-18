/**
 * Problem: #1143 - Longest Common Subsequence (Medium)
 * LeetCode Link: https://leetcode.com/problems/longest-common-subsequence/
 * AI Relevance: The mathematical foundation of ROUGE-L metric (measuring LLM summarization quality),
 *               token alignment between prompt and completion, and source code diffing.
 * 
 * Given two strings `text1` and `text2`, return the length of their longest common subsequence.
 * If there is no common subsequence, return 0.
 * 
 * Strategy: 2D Dynamic Programming (Tabulation)
 * - Let `dp[i][j]` be the length of LCS of `text1[0...i-1]` and `text2[0...j-1]`.
 * - If `text1[i - 1] === text2[j - 1]`:
 *     `dp[i][j] = 1 + dp[i - 1][j - 1]`
 * - Else:
 *     `dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])`
 * 
 * Time Complexity: O(m * n) where m = text1.length, n = text2.length.
 * Space Complexity: O(m * n) or O(min(m, n)) with space optimization.
 */

export function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;

  // dp table of size (m + 1) x (n + 1) filled with 0s
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  console.log('LCS ("abcde", "ace"):', longestCommonSubsequence("abcde", "ace")); // Expected: 3 ("ace")
  console.log('LCS ("abc", "abc"):', longestCommonSubsequence("abc", "abc"));     // Expected: 3
  console.log('LCS ("abc", "def"):', longestCommonSubsequence("abc", "def"));     // Expected: 0
}


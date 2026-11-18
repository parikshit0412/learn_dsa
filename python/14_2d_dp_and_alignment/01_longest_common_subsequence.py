"""
Problem: #1143 - Longest Common Subsequence (Medium)
LeetCode Link: https://leetcode.com/problems/longest-common-subsequence/
AI Relevance: The mathematical foundation of ROUGE-L metric (measuring LLM summarization quality),
              token alignment between prompt and completion, and source code diffing.

Strategy: 2D Dynamic Programming (Tabulation)
Time Complexity: O(m * n)
Space Complexity: O(m * n)
"""


def longest_common_subsequence(text1: str, text2: str) -> int:
    """
    Computes length of longest common subsequence between two strings.
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    return dp[m][n]


# Alias for camelCase
longestCommonSubsequence = longest_common_subsequence


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    print('LCS ("abcde", "ace"):', longest_common_subsequence("abcde", "ace"))  # Expected: 3
    print('LCS ("abc", "abc"):', longest_common_subsequence("abc", "abc"))      # Expected: 3
    print('LCS ("abc", "def"):', longest_common_subsequence("abc", "def"))      # Expected: 0


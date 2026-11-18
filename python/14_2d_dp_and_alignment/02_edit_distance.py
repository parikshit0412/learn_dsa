"""
Problem: #72 - Edit Distance (Levenshtein Distance) (Medium/Hard)
LeetCode Link: https://leetcode.com/problems/edit-distance/
AI Relevance: The fundamental metric for Word Error Rate (WER) in Speech AI (Whisper),
              LLM hallucination measurement, spell checking, and fuzzy entity deduplication.

Strategy: 2D Dynamic Programming (Insert, Delete, Replace transitions)
Time Complexity: O(m * n)
Space Complexity: O(m * n)
"""


def min_distance(word1: str, word2: str) -> int:
    """
    Computes minimum operations (insert, delete, replace) to convert word1 to word2.
    """
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],      # Delete
                    dp[i][j - 1],      # Insert
                    dp[i - 1][j - 1],  # Replace
                )

    return dp[m][n]


# Alias for camelCase
minDistance = min_distance


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    print('Edit Distance ("horse", "ros"):', min_distance("horse", "ros"))  # Expected: 3
    print('Edit Distance ("intention", "execution"):', min_distance("intention", "execution"))  # Expected: 5


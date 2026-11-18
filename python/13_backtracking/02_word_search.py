"""
Problem: #79 - Word Search (Medium)
LeetCode Link: https://leetcode.com/problems/word-search/
AI Relevance: State-space path search, constrained decoding in grid environments,
              and tree search with rollback.

Strategy: DFS Grid Exploration with Backtracking State Restoration
Time Complexity: O(m * n * 4^L)
Space Complexity: O(L)
"""
from typing import List


def exist(board: List[List[str]], word: str) -> bool:
    """
    Checks if word exists in a 2D character grid.
    """
    rows = len(board)
    cols = len(board[0])

    def dfs(r: int, c: int, index: int) -> bool:
        if index == len(word):
            return True

        if (
            r < 0
            or r >= rows
            or c < 0
            or c >= cols
            or board[r][c] != word[index]
        ):
            return False

        # Mark visited
        temp = board[r][c]
        board[r][c] = "#"

        found = (
            dfs(r + 1, c, index + 1)
            or dfs(r - 1, c, index + 1)
            or dfs(r, c + 1, index + 1)
            or dfs(r, c - 1, index + 1)
        )

        # Backtrack
        board[r][c] = temp
        return found

    for r in range(rows):
        for c in range(cols):
            if board[r][c] == word[0] and dfs(r, c, 0):
                return True

    return False


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    board_ex = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
    ]
    print('Exist "ABCCED":', exist(board_ex, "ABCCED"))  # Expected: True
    print('Exist "SEE":', exist(board_ex, "SEE"))        # Expected: True
    print('Exist "ABCB":', exist(board_ex, "ABCB"))      # Expected: False


/**
 * Problem: #79 - Word Search (Medium)
 * LeetCode Link: https://leetcode.com/problems/word-search/
 * AI Relevance: State-space path search, constrained decoding in grid environments,
 *               and tree search with rollback.
 * 
 * Given an `m x n` grid of characters `board` and a string `word`, return true if `word` exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically neighboring).
 * The same letter cell may not be used more than once.
 * 
 * Strategy: DFS with In-Place Visited Backtracking
 * - For each cell (r, c), if board[r][c] matches word[0], start DFS.
 * - Temporarily mark board[r][c] = '#' to avoid revisiting.
 * - Explore 4 directions. If any returns true, return true.
 * - Backtrack: restore board[r][c] to original character.
 * 
 * Time Complexity: O(m * n * 4^L) where L is length of the word.
 * Space Complexity: O(L) for recursion stack.
 */

export function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r: number, c: number, index: number): boolean {
    if (index === word.length) {
      return true;
    }

    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      board[r][c] !== word[index]
    ) {
      return false;
    }

    // Mark current cell as visited
    const temp = board[r][c];
    board[r][c] = '#';

    // Explore 4 directions
    const found =
      dfs(r + 1, c, index + 1) ||
      dfs(r - 1, c, index + 1) ||
      dfs(r, c + 1, index + 1) ||
      dfs(r, c - 1, index + 1);

    // Backtrack: restore original cell character
    board[r][c] = temp;

    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === word[0] && dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
  ];
  console.log('Exist "ABCCED":', exist(board, "ABCCED")); // Expected: true
  console.log('Exist "SEE":', exist(board, "SEE"));       // Expected: true
  console.log('Exist "ABCB":', exist(board, "ABCB"));     // Expected: false
}


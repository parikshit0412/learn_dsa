/**
 * Problem: #200 - Number of Islands (Medium)
 * LeetCode Link: https://leetcode.com/problems/number-of-islands/
 * 
 * Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water),
 * return the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * 
 * Strategy: Depth-First Search (DFS) Flood Fill
 * - Iterate over every cell `(r, c)` in the grid.
 * - When an unvisited land cell `'1'` is found, increment island counter.
 * - Launch a DFS from `(r, c)` to mark all 4-directionally connected land cells as visited (sink to `'0'`).
 * 
 * Time Complexity: O(m * n) - Every cell is visited at most a constant number of times.
 * Space Complexity: O(m * n) - In the worst case (all land), recursive DFS call stack depth is m * n.
 */

export function numIslands(grid: string[][]): number {
  // Edge case: Empty grid check
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // DFS function to sink the current island
  function dfsSink(r: number, c: number): void {
    // Boundary check and water check
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
      return;
    }

    // Mark current cell as visited by mutating '1' to '0' (sinking the land)
    grid[r][c] = '0';

    // Recursively sink all 4 adjacent neighboring cells
    dfsSink(r + 1, c); // Down
    dfsSink(r - 1, c); // Up
    dfsSink(r, c + 1); // Right
    dfsSink(r, c - 1); // Left
  }

  // Scan the entire grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // If we encounter unvisited land '1', it marks the discovery of a new island
      if (grid[r][c] === '1') {
        islandCount++;
        // Sink the entire connected island so it isn't counted again
        dfsSink(r, c);
      }
    }
  }

  return islandCount;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];
  console.log('Number of Islands (Test 1):', numIslands(grid1)); // Expected: 1

  const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];
  console.log('Number of Islands (Test 2):', numIslands(grid2)); // Expected: 3
}

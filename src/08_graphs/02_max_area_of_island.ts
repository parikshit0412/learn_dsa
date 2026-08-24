/**
 * Problem: #695 - Max Area of Island (Medium)
 * LeetCode Link: https://leetcode.com/problems/max-area-of-island/
 * 
 * You are given an `m x n` binary matrix `grid`. An island is a group of 1's (representing land)
 * connected 4-directionally (horizontal or vertical).
 * The area of an island is the number of cells with a value 1 in the island.
 * Return the maximum area of an island in `grid`. If there is no island, return 0.
 * 
 * Strategy: Depth-First Search (DFS) Area Aggregator
 * - When encountering a '1', launch a DFS that returns the sum of land cells for that island.
 * - Each visited cell is flipped to 0 to prevent double-counting.
 * - `area = 1 + dfs(down) + dfs(up) + dfs(right) + dfs(left)`.
 * 
 * Time Complexity: O(m * n) - Every cell visited a constant number of times.
 * Space Complexity: O(m * n) - Recursion stack in worst case.
 */

export function maxAreaOfIsland(grid: number[][]): number {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let maxArea = 0;

  // DFS function returning the total area of the island connected to (r, c)
  function calculateAreaDFS(r: number, c: number): number {
    // Check out-of-bounds or water (0)
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
      return 0;
    }

    // Mark current cell as visited by converting 1 to 0
    grid[r][c] = 0;

    // Start with area 1 for the current cell, then accumulate 4-directional neighbors
    let area = 1;
    area += calculateAreaDFS(r + 1, c); // Down
    area += calculateAreaDFS(r - 1, c); // Up
    area += calculateAreaDFS(r, c + 1); // Right
    area += calculateAreaDFS(r, c - 1); // Left

    return area;
  }

  // Iterate over all cells in grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        // Calculate area for current island and update maximum area found
        const currentIslandArea = calculateAreaDFS(r, c);
        maxArea = Math.max(maxArea, currentIslandArea);
      }
    }
  }

  return maxArea;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const grid1 = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
  ];
  console.log('Max Area of Island (Test 1):', maxAreaOfIsland(grid1)); // Expected: 6
}

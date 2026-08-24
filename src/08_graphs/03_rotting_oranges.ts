/**
 * Problem: #994 - Rotting Oranges (Medium)
 * LeetCode Link: https://leetcode.com/problems/rotting-oranges/
 * 
 * You are given an `m x n` grid where each cell has one of three values:
 * - 0 representing an empty cell,
 * - 1 representing a fresh orange, or
 * - 2 representing a rotten orange.
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange.
 * If this is impossible, return -1.
 * 
 * Strategy: Multi-Source Breadth-First Search (BFS)
 * 1. Count total fresh oranges.
 * 2. Enqueue coordinates of all initially rotten oranges (multi-source starting points).
 * 3. Perform BFS level-by-level (each level = 1 minute).
 * 4. For each rotten orange, infect adjacent fresh oranges (turn 1 -> 2, decrement freshCount, enqueue).
 * 5. Return elapsed minutes if `freshCount == 0`, else -1.
 * 
 * Time Complexity: O(m * n) - Every cell processed at most once.
 * Space Complexity: O(m * n) - Queue stores at most m * n orange coordinates.
 */

export function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  let freshCount = 0;
  // Queue to store coordinates of rotten oranges [r, c]
  const queue: [number, number][] = [];

  // Step 1: Scan grid to count fresh oranges and collect initial rotten oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshCount++;
      }
    }
  }

  // If there are no fresh oranges to begin with, 0 minutes are needed
  if (freshCount === 0) {
    return 0;
  }

  let minutes = 0;
  // 4-directional offsets: [down, up, right, left]
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  // Step 2: Multi-source BFS level by level
  while (queue.length > 0 && freshCount > 0) {
    const levelSize = queue.length;
    let rottedThisMinute = false;

    // Process all rotten oranges at the current minute
    for (let i = 0; i < levelSize; i++) {
      const [r, c] = queue.shift()!;

      // Check all 4 adjacent neighbors
      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;

        // Check if neighbor is within bounds and has a FRESH orange
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
          // Rot the fresh orange
          grid[nr][nc] = 2;
          freshCount--;
          rottedThisMinute = true;
          // Enqueue newly rotten orange for next minute's propagation
          queue.push([nr, nc]);
        }
      }
    }

    // Only increment minutes if at least one fresh orange was infected this round
    if (rottedThisMinute) {
      minutes++;
    }
  }

  // If all fresh oranges have rotted, return minutes; otherwise impossible (-1)
  return freshCount === 0 ? minutes : -1;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const grid1 = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
  ];
  console.log('Oranges Rotting (Test 1):', orangesRotting(grid1)); // Expected: 4

  const grid2 = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
  ];
  console.log('Oranges Rotting (Test 2):', orangesRotting(grid2)); // Expected: -1
}

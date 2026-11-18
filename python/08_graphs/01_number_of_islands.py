"""
Problem: #200 - Number of Islands (Medium)
LeetCode Link: https://leetcode.com/problems/number-of-islands/

Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water),
return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

Strategy: Depth-First Search (DFS) Flood Fill
- Iterate over every cell `(r, c)` in the grid.
- When an unvisited land cell `'1'` is found, increment island counter.
- Launch a DFS from `(r, c)` to mark all 4-directionally connected land cells as visited (sink to `'0'`).

Time Complexity: O(m * n) - Every cell is visited at most a constant number of times.
Space Complexity: O(m * n) - In the worst case (all land), recursive DFS call stack depth is m * n.
"""
from typing import List


def num_islands(grid: List[List[str]]) -> int:
    """
    Counts the number of distinct islands in a binary 2D grid.
    """
    if not grid or not grid[0]:
        return 0

    # Make a copy of rows to avoid mutating original input if needed, or sink in place
    # Standard LeetCode solution modifies grid in place
    grid_copy = [row[:] for row in grid]
    rows = len(grid_copy)
    cols = len(grid_copy[0])
    island_count = 0

    def dfs_sink(r: int, c: int) -> None:
        if r < 0 or r >= rows or c < 0 or c >= cols or grid_copy[r][c] == "0":
            return

        grid_copy[r][c] = "0"  # Sink land

        dfs_sink(r + 1, c)  # Down
        dfs_sink(r - 1, c)  # Up
        dfs_sink(r, c + 1)  # Right
        dfs_sink(r, c - 1)  # Left

    for r in range(rows):
        for c in range(cols):
            if grid_copy[r][c] == "1":
                island_count += 1
                dfs_sink(r, c)

    return island_count


# Alias for camelCase
numIslands = num_islands


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    grid1 = [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ]
    print("Number of Islands (Test 1):", num_islands(grid1))  # Expected: 1

    grid2 = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
    ]
    print("Number of Islands (Test 2):", num_islands(grid2))  # Expected: 3


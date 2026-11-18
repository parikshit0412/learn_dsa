"""
Problem: #695 - Max Area of Island (Medium)
LeetCode Link: https://leetcode.com/problems/max-area-of-island/

You are given an `m x n` binary matrix `grid`. An island is a group of 1's (representing land)
connected 4-directionally (horizontal or vertical).
The area of an island is the number of cells with a value 1 in the island.
Return the maximum area of an island in `grid`. If there is no island, return 0.

Strategy: Depth-First Search (DFS) Area Aggregator
- When encountering a 1, launch a DFS that returns the sum of land cells for that island.
- Each visited cell is flipped to 0 to prevent double-counting.
- `area = 1 + dfs(down) + dfs(up) + dfs(right) + dfs(left)`.

Time Complexity: O(m * n) - Every cell visited a constant number of times.
Space Complexity: O(m * n) - Recursion stack in worst case.
"""
from typing import List


def max_area_of_island(grid: List[List[int]]) -> int:
    """
    Computes the maximum area of an island in a 2D binary grid.
    """
    if not grid or not grid[0]:
        return 0

    grid_copy = [row[:] for row in grid]
    rows = len(grid_copy)
    cols = len(grid_copy[0])
    max_area = 0

    def calculate_area_dfs(r: int, c: int) -> int:
        if r < 0 or r >= rows or c < 0 or c >= cols or grid_copy[r][c] == 0:
            return 0

        grid_copy[r][c] = 0  # Mark visited

        area = 1
        area += calculate_area_dfs(r + 1, c)  # Down
        area += calculate_area_dfs(r - 1, c)  # Up
        area += calculate_area_dfs(r, c + 1)  # Right
        area += calculate_area_dfs(r, c - 1)  # Left

        return area

    for r in range(rows):
        for c in range(cols):
            if grid_copy[r][c] == 1:
                current_island_area = calculate_area_dfs(r, c)
                max_area = max(max_area, current_island_area)

    return max_area


# Alias for camelCase
maxAreaOfIsland = max_area_of_island


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    grid1 = [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ]
    print("Max Area of Island (Test 1):", max_area_of_island(grid1))  # Expected: 6


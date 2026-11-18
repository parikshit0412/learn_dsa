"""
Problem: #994 - Rotting Oranges (Medium)
LeetCode Link: https://leetcode.com/problems/rotting-oranges/

You are given an `m x n` grid where each cell can have one of three values:
- 0 representing an empty cell,
- 1 representing a fresh orange, or
- 2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange.
If this is impossible, return -1.

Strategy: Multi-Source Breadth-First Search (BFS)
1. Scan grid: count fresh oranges and enqueue all initially rotten oranges.
2. If freshCount == 0, return 0 immediately.
3. Process BFS layer by layer (minute by minute):
   For each rotten orange, infect adjacent fresh oranges, decrement freshCount, enqueue them.
4. Return minutes if freshCount == 0 else -1.

Time Complexity: O(m * n) - Each cell processed at most once.
Space Complexity: O(m * n) - BFS queue storing up to m * n cells.
"""
from collections import deque
from typing import List


def oranges_rotting(grid: List[List[int]]) -> int:
    """
    Computes minimum minutes until no fresh orange remains, or -1 if impossible.
    """
    if not grid or not grid[0]:
        return 0

    grid_copy = [row[:] for row in grid]
    rows = len(grid_copy)
    cols = len(grid_copy[0])

    queue: deque[tuple[int, int]] = deque()
    fresh_count = 0

    # Step 1: Count fresh oranges and enqueue initially rotten oranges
    for r in range(rows):
        for c in range(cols):
            if grid_copy[r][c] == 2:
                queue.append((r, c))
            elif grid_copy[r][c] == 1:
                fresh_count += 1

    if fresh_count == 0:
        return 0

    minutes = 0
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]

    # Step 2: Multi-source BFS level by level
    while queue and fresh_count > 0:
        level_size = len(queue)
        rotted_this_minute = False

        for _ in range(level_size):
            r, c = queue.popleft()

            for dr, dc in directions:
                nr, nc = r + dr, c + dc

                if 0 <= nr < rows and 0 <= nc < cols and grid_copy[nr][nc] == 1:
                    grid_copy[nr][nc] = 2
                    fresh_count -= 1
                    rotted_this_minute = True
                    queue.append((nr, nc))

        if rotted_this_minute:
            minutes += 1

    return minutes if fresh_count == 0 else -1


# Alias for camelCase
orangesRotting = oranges_rotting


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    grid1 = [
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
    ]
    print("Oranges Rotting (Test 1):", oranges_rotting(grid1))  # Expected: 4

    grid2 = [
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
    ]
    print("Oranges Rotting (Test 2):", oranges_rotting(grid2))  # Expected: -1


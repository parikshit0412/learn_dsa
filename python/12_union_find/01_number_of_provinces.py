"""
Problem: #547 - Number of Provinces (Medium)
LeetCode Link: https://leetcode.com/problems/number-of-provinces/
AI Relevance: Connected components detection in embedding graphs, community detection,
              and unsupervised clustering in training data pipelines.

Strategy: Union-Find (Disjoint Set Union) with Path Compression and Union by Rank
Time Complexity: O(n^2 * α(n))
Space Complexity: O(n)
"""
from typing import List


class UnionFind:
    """Disjoint Set Union with Path Compression and Union by Rank."""

    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [1] * n
        self.count = n

    def find(self, x: int) -> int:
        """Finds root with path compression."""
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x: int, y: int) -> bool:
        """Unions two sets by rank."""
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x == root_y:
            return False

        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        elif self.rank[root_x] > self.rank[root_y]:
            self.parent[root_y] = root_x
        else:
            self.parent[root_y] = root_x
            self.rank[root_x] += 1

        self.count -= 1
        return True


def find_circle_num(is_connected: List[List[int]]) -> int:
    """
    Computes number of connected provinces in an adjacency matrix.
    """
    n = len(is_connected)
    uf = UnionFind(n)

    for i in range(n):
        for j in range(i + 1, n):
            if is_connected[i][j] == 1:
                uf.union(i, j)

    return uf.count


# Alias for camelCase
findCircleNum = find_circle_num


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    matrix1 = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ]
    print("Number of Provinces 1:", find_circle_num(matrix1))  # Expected: 2

    matrix2 = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ]
    print("Number of Provinces 2:", find_circle_num(matrix2))  # Expected: 3


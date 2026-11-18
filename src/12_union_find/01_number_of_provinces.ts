/**
 * Problem: #547 - Number of Provinces (Medium)
 * LeetCode Link: https://leetcode.com/problems/number-of-provinces/
 * AI Relevance: Connected components detection in embedding graphs, community detection,
 *               and unsupervised clustering in training data pipelines.
 * 
 * There are n cities. An adjacency matrix `isConnected` gives pairwise connections:
 * `isConnected[i][j] = 1` if city i and city j are directly connected, 0 otherwise.
 * A province is a group of directly or indirectly connected cities.
 * Return the total number of provinces.
 * 
 * Strategy: Disjoint Set Union (Union-Find) with Path Compression & Union by Rank
 * - Initialize n disjoint sets (provincesCount = n).
 * - For each pair (i, j) where isConnected[i][j] === 1:
 *   - If union(i, j) merges two separate components, decrement provincesCount.
 * 
 * Time Complexity: O(n^2 * α(n)) ≈ O(n^2) where α is inverse Ackermann function.
 * Space Complexity: O(n) for parent and rank arrays.
 */

export class UnionFind {
  parent: number[];
  rank: number[];
  count: number;

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(1);
    this.count = n;
  }

  find(x: number): number {
    // Path compression
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number): boolean {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    // Union by rank
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    this.count--;
    return true;
  }
}

export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const uf = new UnionFind(n);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.count;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const isConnected1 = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ];
  console.log('Number of Provinces 1:', findCircleNum(isConnected1)); // Expected: 2

  const isConnected2 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];
  console.log('Number of Provinces 2:', findCircleNum(isConnected2)); // Expected: 3
}


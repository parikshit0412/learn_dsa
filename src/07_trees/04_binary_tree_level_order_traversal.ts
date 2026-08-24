import { TreeNode, createBinaryTree } from '../common/TreeNode.js';

/**
 * Problem: #102 - Binary Tree Level Order Traversal (Medium)
 * LeetCode Link: https://leetcode.com/problems/binary-tree-level-order-traversal/
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 * 
 * Strategy: Breadth-First Search (BFS) using a Queue
 * - Initialize queue with root.
 * - In each iteration of the outer loop, record `levelSize = queue.length`.
 * - Process exactly `levelSize` nodes to gather all node values on the current level.
 * - Push children of current level nodes to the queue for the next level.
 * 
 * Time Complexity: O(n) - Every node processed exactly once.
 * Space Complexity: O(w) or O(n) - Maximum queue size equals maximum width of binary tree (up to n/2 nodes).
 */

export function levelOrder(root: TreeNode | null): number[][] {
  // If tree is empty, return empty 2D array
  if (root === null) {
    return [];
  }

  const result: number[][] = [];
  // Queue to hold nodes level by level
  const queue: TreeNode[] = [root];

  // Continue BFS until queue has no more nodes to process
  while (queue.length > 0) {
    // Current number of nodes present at this specific tree level
    const levelSize = queue.length;
    // Array to collect values for the current level
    const currentLevel: number[] = [];

    // Dequeue only the nodes that belong to the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      currentLevel.push(node.val);

      // Enqueue left child if it exists
      if (node.left !== null) {
        queue.push(node.left);
      }

      // Enqueue right child if it exists
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    // Add completed level to result array
    result.push(currentLevel);
  }

  return result;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const tree1 = createBinaryTree([3, 9, 20, null, null, 15, 7]);
  console.log('Level Order Traversal:', levelOrder(tree1));
  // Expected: [[3], [9, 20], [15, 7]]
}

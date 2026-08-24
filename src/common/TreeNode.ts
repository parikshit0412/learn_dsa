/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  // Value stored in the node
  val: number;
  // Left child pointer
  left: TreeNode | null;
  // Right child pointer
  right: TreeNode | null;

  constructor(
    val: number = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Helper function to create a Binary Tree from a level-order array representation (LeetCode style).
 * 
 * @param values Array of numbers and nulls representing level-order traversal
 * @returns Root node of the created binary tree, or null if input is empty
 */
export function createBinaryTree(values: (number | null)[]): TreeNode | null {
  // If array is empty or root is null, return null
  if (values.length === 0 || values[0] === null) return null;

  // Create root node
  const root = new TreeNode(values[0]);
  // Queue to track parent nodes level by level
  const queue: TreeNode[] = [root];
  let i = 1;

  // Process nodes in level order
  while (queue.length > 0 && i < values.length) {
    const current = queue.shift()!;

    // Process left child
    if (i < values.length) {
      const leftVal = values[i++];
      if (leftVal !== null && leftVal !== undefined) {
        current.left = new TreeNode(leftVal);
        queue.push(current.left);
      }
    }

    // Process right child
    if (i < values.length) {
      const rightVal = values[i++];
      if (rightVal !== null && rightVal !== undefined) {
        current.right = new TreeNode(rightVal);
        queue.push(current.right);
      }
    }
  }

  return root;
}

/**
 * Helper function to convert a Binary Tree to a level-order array (LeetCode style).
 * 
 * @param root Root node of the binary tree
 * @returns Array representation of the tree in level-order
 */
export function binaryTreeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return [];

  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }

  // Remove trailing nulls to match standard LeetCode format
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

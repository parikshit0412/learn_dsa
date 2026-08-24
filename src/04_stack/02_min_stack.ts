/**
 * Problem: #155 - Min Stack (Medium)
 * LeetCode Link: https://leetcode.com/problems/min-stack/
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * Implement the MinStack class:
 * - `MinStack()` initializes the stack object.
 * - `void push(int val)` pushes the element val onto the stack.
 * - `void pop()` removes the element on the top of the stack.
 * - `int top()` gets the top element of the stack.
 * - `int getMin()` retrieves the minimum element in the stack.
 * You must implement a solution with O(1) time complexity for each operation.
 * 
 * Strategy: Two Parallel Stacks
 * - `mainStack`: Stores the actual values pushed.
 * - `minStack`: Stores the minimum value present at each level of the stack.
 * 
 * Time Complexity: O(1) for all operations (push, pop, top, getMin).
 * Space Complexity: O(n) to store up to n elements in both stacks.
 */

export class MinStack {
  private mainStack: number[];
  private minStack: number[];

  constructor() {
    this.mainStack = [];
    this.minStack = [];
  }

  /**
   * Pushes val onto stack and updates the minimum tracker stack.
   */
  push(val: number): void {
    this.mainStack.push(val);

    // If minStack is empty, this val is the initial minimum.
    // Otherwise, the new minimum is min(val, current minimum).
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      const currentMin = this.minStack[this.minStack.length - 1];
      this.minStack.push(Math.min(val, currentMin));
    }
  }

  /**
   * Removes the element on top of both stacks.
   */
  pop(): void {
    this.mainStack.pop();
    this.minStack.pop();
  }

  /**
   * Retrieves the top element of the stack without removing it.
   */
  top(): number {
    return this.mainStack[this.mainStack.length - 1];
  }

  /**
   * Retrieves the current minimum element in O(1) time.
   */
  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log('getMin():', minStack.getMin()); // Expected: -3
  minStack.pop();
  console.log('top():', minStack.top());       // Expected: 0
  console.log('getMin():', minStack.getMin()); // Expected: -2
}

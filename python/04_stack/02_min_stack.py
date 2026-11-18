"""
Problem: #155 - Min Stack (Medium)
LeetCode Link: https://leetcode.com/problems/min-stack/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:
- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element val onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each operation.

Strategy: Two Parallel Stacks
- `main_stack`: Stores the actual values pushed.
- `min_stack`: Stores the minimum value present at each level of the stack.

Time Complexity: O(1) for all operations (push, pop, top, get_min).
Space Complexity: O(n) to store up to n elements in both stacks.
"""
from typing import List


class MinStack:
    """
    Stack implementation that retrieves minimum element in O(1) time.
    """

    def __init__(self):
        self.main_stack: List[int] = []
        self.min_stack: List[int] = []

    def push(self, val: int) -> None:
        """Pushes val onto stack and updates the minimum tracker stack."""
        self.main_stack.append(val)
        if not self.min_stack:
            self.min_stack.append(val)
        else:
            current_min = self.min_stack[-1]
            self.min_stack.append(min(val, current_min))

    def pop(self) -> None:
        """Removes the element on top of both stacks."""
        self.main_stack.pop()
        self.min_stack.pop()

    def top(self) -> int:
        """Retrieves the top element of the stack without removing it."""
        return self.main_stack[-1]

    def get_min(self) -> int:
        """Retrieves the current minimum element in O(1) time."""
        return self.min_stack[-1]

    # Alias for camelCase
    getMin = get_min


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    min_stack = MinStack()
    min_stack.push(-2)
    min_stack.push(0)
    min_stack.push(-3)
    print("get_min():", min_stack.get_min())  # Expected: -3
    min_stack.pop()
    print("top():", min_stack.top())          # Expected: 0
    print("get_min():", min_stack.get_min())  # Expected: -2


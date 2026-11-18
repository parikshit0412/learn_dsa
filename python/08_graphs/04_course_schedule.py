"""
Problem: #207 - Course Schedule (Medium - Topological Sort Pattern)
LeetCode Link: https://leetcode.com/problems/course-schedule/

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`.
You are given an array `prerequisites` where `prerequisites[i] = [a, b]` indicates that you must take course `b` first if you want to take course `a`.
Return `true` if you can finish all courses. Otherwise, return `false`.

Strategy: Kahn's Algorithm for Topological Sorting (BFS with In-degrees)
1. Build Adjacency List `graph: course -> list of dependent courses`.
2. Build `in_degree` array tracking prerequisite count for each course.
3. Enqueue all courses with `in_degree == 0`.
4. Process queue: Decrement in-degree of downstream courses. When 0, enqueue.
5. If total processed == `numCourses`, valid ordering exists (no cycle).

Time Complexity: O(V + E) - Where V = numCourses, E = len(prerequisites).
Space Complexity: O(V + E) - Storage for adjacency list, in-degree array, and BFS queue.
"""
from collections import deque
from typing import List


def can_finish(num_courses: int, prerequisites: List[List[int]]) -> bool:
    """
    Determines if it is possible to finish all courses using Kahn's topological sort.
    """
    in_degree = [0] * num_courses
    adj_list: List[List[int]] = [[] for _ in range(num_courses)]

    for course, prereq in prerequisites:
        adj_list[prereq].append(course)
        in_degree[course] += 1

    queue: deque[int] = deque([i for i in range(num_courses) if in_degree[i] == 0])
    courses_completed = 0

    while queue:
        current_course = queue.popleft()
        courses_completed += 1

        for neighbor in adj_list[current_course]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return courses_completed == num_courses


# Alias for camelCase
canFinish = can_finish


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    print("Can Finish (Test 1):", can_finish(2, [[1, 0]]))  # Expected: True (0 -> 1)
    print("Can Finish (Test 2):", can_finish(2, [[1, 0], [0, 1]]))  # Expected: False (cycle)


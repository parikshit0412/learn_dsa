/**
 * Problem: #207 - Course Schedule (Medium - Topological Sort Pattern)
 * LeetCode Link: https://leetcode.com/problems/course-schedule/
 * 
 * There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`.
 * You are given an array `prerequisites` where `prerequisites[i] = [a, b]` indicates that you must take course `b` first if you want to take course `a`.
 * Return `true` if you can finish all courses. Otherwise, return `false`.
 * 
 * Strategy: Kahn's Algorithm for Topological Sorting (BFS with In-degrees)
 * 1. Build Adjacency List `graph: Map<course, list of dependent courses>`.
 * 2. Build `inDegree` array tracking how many prerequisite courses each course has.
 * 3. Enqueue all courses with `inDegree === 0` (courses with no prerequisites).
 * 4. Process queue: For each course, decrement in-degree of dependent courses.
 *    When a dependent course reaches `inDegree === 0`, enqueue it.
 * 5. If total courses processed == `numCourses`, then a valid topological order exists (No cycle).
 * 
 * Time Complexity: O(V + E) - Where V = numCourses, E = prerequisites.length.
 * Space Complexity: O(V + E) - Storage for adjacency list, in-degree array, and BFS queue.
 */

export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // Array tracking the number of incoming prerequisite edges for each course
  const inDegree: number[] = new Array(numCourses).fill(0);

  // Adjacency list: prereqCourse -> array of downstream dependent courses
  const adjList = new Map<number, number[]>();
  for (let i = 0; i < numCourses; i++) {
    adjList.set(i, []);
  }

  // Populate graph and calculate in-degrees
  for (let i = 0; i < prerequisites.length; i++) {
    const [course, prereq] = prerequisites[i];
    // prereq -> course
    adjList.get(prereq)!.push(course);
    inDegree[course]++;
  }

  // Queue to store all courses that currently have 0 remaining prerequisites
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  // Counter for total courses successfully taken
  let coursesCompleted = 0;

  // Process courses in topological order
  while (queue.length > 0) {
    const currentCourse = queue.shift()!;
    coursesCompleted++;

    // For all courses that require currentCourse as prerequisite
    const neighbors = adjList.get(currentCourse) || [];
    for (let j = 0; j < neighbors.length; j++) {
      const neighborCourse = neighbors[j];
      inDegree[neighborCourse]--;

      // If all prerequisites for neighborCourse are satisfied, enqueue it
      if (inDegree[neighborCourse] === 0) {
        queue.push(neighborCourse);
      }
    }
  }

  // If completed courses count matches numCourses, no cycle exists -> all courses can be finished
  return coursesCompleted === numCourses;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  console.log('Can Finish (Test 1):', canFinish(2, [[1, 0]])); // Expected: true (0 -> 1)
  console.log('Can Finish (Test 2):', canFinish(2, [[1, 0], [0, 1]])); // Expected: false (cycle: 0 <-> 1)
}

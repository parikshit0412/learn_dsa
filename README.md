# 🚀 Curated DSA Problem List & TypeScript Solutions

A structured repository containing clean, optimal, and comprehensively commented solutions for **36 high-frequency DSA problems** across 9 essential interview patterns.

---

## 📊 Summary & Progress Tracker

| Category | Easy | Medium | Hard | Total | Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| 1. [Arrays & Hashing](#1-arrays--hashing-foundation) | 1 | 4 | 0 | 5 | ✅ 5 / 5 |
| 2. [Two Pointers](#2-two-pointers) | 1 | 2 | 0 | 3 | ✅ 3 / 3 |
| 3. [Sliding Window](#3-sliding-window-crucial-for-streamarray-data) | 1 | 2 | 0 | 3 | ✅ 3 / 3 |
| 4. [Stack & Monotonic Stack](#4-stack--monotonic-stack) | 1 | 2 | 0 | 3 | ✅ 3 / 3 |
| 5. [Fast & Slow Pointers / Linked List](#5-fast--slow-pointers--linked-list) | 3 | 2 | 0 | 5 | ✅ 5 / 5 |
| 6. [Binary Search](#6-binary-search-search-space-optimization) | 1 | 2 | 0 | 3 | ✅ 3 / 3 |
| 7. [Trees & BST](#7-trees--binary-search-trees-dfs--bfs) | 2 | 3 | 0 | 5 | ✅ 5 / 5 |
| 8. [Graphs & Matrix Traversal](#8-graphs--matrix-traversal-grid-bfsdfs) | 0 | 4 | 0 | 4 | ✅ 4 / 4 |
| 9. [Intervals & Dynamic Programming](#9-intervals--dynamic-programming-basics-only) | 1 | 4 | 0 | 5 | ✅ 5 / 5 |
| **Total** | **11** | **25** | **0** | **36** | **✅ 36 / 36 Completed** |

---

## 🛠️ How to Run & Verify Solutions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run TypeScript Type Check:**
   ```bash
   npm run typecheck
   ```

3. **Execute All 36 Verified Test Cases:**
   ```bash
   npx tsx src/verify_all.ts
   ```

4. **Run Any Single Problem File:**
   ```bash
   npx tsx src/01_arrays_and_hashing/01_two_sum.ts
   ```

---

## 1. Arrays & Hashing (Foundation)
> **Core Concepts:** Hash Maps, Hash Sets, Frequency Counting, Prefix Operations, Bucket Sort.

- [x] **#1** - [Two Sum](https://leetcode.com/problems/two-sum/) `Easy` ➔ [`src/01_arrays_and_hashing/01_two_sum.ts`](./src/01_arrays_and_hashing/01_two_sum.ts)
- [x] **#49** - [Group Anagrams](https://leetcode.com/problems/group-anagrams/) `Medium` ➔ [`src/01_arrays_and_hashing/02_group_anagrams.ts`](./src/01_arrays_and_hashing/02_group_anagrams.ts)
- [x] **#347** - [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) `Medium` ➔ [`src/01_arrays_and_hashing/03_top_k_frequent_elements.ts`](./src/01_arrays_and_hashing/03_top_k_frequent_elements.ts)
- [x] **#238** - [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) `Medium` ➔ [`src/01_arrays_and_hashing/04_product_of_array_except_self.ts`](./src/01_arrays_and_hashing/04_product_of_array_except_self.ts)
- [x] **#128** - [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) `Medium` ➔ [`src/01_arrays_and_hashing/05_longest_consecutive_sequence.ts`](./src/01_arrays_and_hashing/05_longest_consecutive_sequence.ts)

---

## 2. Two Pointers
> **Core Concepts:** Left/Right Pointers, In-place Swapping, Collision Detection, Sorted Array properties.

- [x] **#125** - [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) `Easy` ➔ [`src/02_two_pointers/01_valid_palindrome.ts`](./src/02_two_pointers/01_valid_palindrome.ts)
- [x] **#15** - [3Sum](https://leetcode.com/problems/3sum/) `Medium` ➔ [`src/02_two_pointers/02_3sum.ts`](./src/02_two_pointers/02_3sum.ts)
- [x] **#11** - [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) `Medium` ➔ [`src/02_two_pointers/03_container_with_most_water.ts`](./src/02_two_pointers/03_container_with_most_water.ts)

---

## 3. Sliding Window (Crucial for Stream/Array Data)
> **Core Concepts:** Dynamic vs Fixed Window Size, Frequency Windows, State Tracking, Invariant Maintenance.

- [x] **#121** - [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) `Easy` ➔ [`src/03_sliding_window/01_best_time_to_buy_and_sell_stock.ts`](./src/03_sliding_window/01_best_time_to_buy_and_sell_stock.ts)
- [x] **#3** - [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) `Medium` ➔ [`src/03_sliding_window/02_longest_substring_without_repeating_characters.ts`](./src/03_sliding_window/02_longest_substring_without_repeating_characters.ts)
- [x] **#424** - [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) `Medium` ➔ [`src/03_sliding_window/03_longest_repeating_character_replacement.ts`](./src/03_sliding_window/03_longest_repeating_character_replacement.ts)

---

## 4. Stack & Monotonic Stack
> **Core Concepts:** LIFO property, Parentheses matching, Min/Max tracking, Next Greater/Smaller Element.

- [x] **#20** - [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) `Easy` ➔ [`src/04_stack/01_valid_parentheses.ts`](./src/04_stack/01_valid_parentheses.ts)
- [x] **#155** - [Min Stack](https://leetcode.com/problems/min-stack/) `Medium` ➔ [`src/04_stack/02_min_stack.ts`](./src/04_stack/02_min_stack.ts)
- [x] **#739** - [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) `Medium` ➔ [`src/04_stack/03_daily_temperatures.ts`](./src/04_stack/03_daily_temperatures.ts)

---

## 5. Fast & Slow Pointers / Linked List
> **Core Concepts:** Pointer manipulation, Dummy Head technique, Cycle detection (Floyd's algorithm), Hash Table + Doubly Linked List.

- [x] **#206** - [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) `Easy` ➔ [`src/05_linked_list/01_reverse_linked_list.ts`](./src/05_linked_list/01_reverse_linked_list.ts)
- [x] **#21** - [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) `Easy` ➔ [`src/05_linked_list/02_merge_two_sorted_lists.ts`](./src/05_linked_list/02_merge_two_sorted_lists.ts)
- [x] **#141** - [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) `Easy` ➔ [`src/05_linked_list/03_linked_list_cycle.ts`](./src/05_linked_list/03_linked_list_cycle.ts)
- [x] **#19** - [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) `Medium` ➔ [`src/05_linked_list/04_remove_nth_node_from_end_of_list.ts`](./src/05_linked_list/04_remove_nth_node_from_end_of_list.ts)
- [x] **#146** - [LRU Cache](https://leetcode.com/problems/lru-cache/) `Medium` *(High Frequency)* ➔ [`src/05_linked_list/05_lru_cache.ts`](./src/05_linked_list/05_lru_cache.ts)

---

## 6. Binary Search (Search Space Optimization)
> **Core Concepts:** Monotonicity, Boundary conditions (`low <= high` vs `low < high`), Rotated sorted array splits.

- [x] **#704** - [Binary Search](https://leetcode.com/problems/binary-search/) `Easy` ➔ [`src/06_binary_search/01_binary_search.ts`](./src/06_binary_search/01_binary_search.ts)
- [x] **#33** - [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) `Medium` ➔ [`src/06_binary_search/02_search_in_rotated_sorted_array.ts`](./src/06_binary_search/02_search_in_rotated_sorted_array.ts)
- [x] **#153** - [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) `Medium` ➔ [`src/06_binary_search/03_find_minimum_in_rotated_sorted_array.ts`](./src/06_binary_search/03_find_minimum_in_rotated_sorted_array.ts)

---

## 7. Trees & Binary Search Trees (DFS / BFS)
> **Core Concepts:** Recursion, Inorder/Preorder/Postorder, Level-Order (Queue), BST Properties (`left < root < right`), LCA logic.

- [x] **#226** - [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) `Easy` ➔ [`src/07_trees/01_invert_binary_tree.ts`](./src/07_trees/01_invert_binary_tree.ts)
- [x] **#104** - [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) `Easy` ➔ [`src/07_trees/02_maximum_depth_of_binary_tree.ts`](./src/07_trees/02_maximum_depth_of_binary_tree.ts)
- [x] **#98** - [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) `Medium` ➔ [`src/07_trees/03_validate_binary_search_tree.ts`](./src/07_trees/03_validate_binary_search_tree.ts)
- [x] **#102** - [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) `Medium` ➔ [`src/07_trees/04_binary_tree_level_order_traversal.ts`](./src/07_trees/04_binary_tree_level_order_traversal.ts)
- [x] **#235** - [Lowest Common Ancestor of a BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-bst/) `Medium` ➔ [`src/07_trees/05_lowest_common_ancestor_of_a_bst.ts`](./src/07_trees/05_lowest_common_ancestor_of_a_bst.ts)

---

## 8. Graphs & Matrix Traversal (Grid BFS/DFS)
> **Core Concepts:** Grid traversal (4-directional), Visited Set, Multi-source BFS, Topological Sort (Kahn's / DFS cycle detection).

- [x] **#200** - [Number of Islands](https://leetcode.com/problems/number-of-islands/) `Medium` ➔ [`src/08_graphs/01_number_of_islands.ts`](./src/08_graphs/01_number_of_islands.ts)
- [x] **#695** - [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) `Medium` ➔ [`src/08_graphs/02_max_area_of_island.ts`](./src/08_graphs/02_max_area_of_island.ts)
- [x] **#994** - [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) `Medium` ➔ [`src/08_graphs/03_rotting_oranges.ts`](./src/08_graphs/03_rotting_oranges.ts)
- [x] **#207** - [Course Schedule](https://leetcode.com/problems/course-schedule/) `Medium` *(Topological Sort)* ➔ [`src/08_graphs/04_course_schedule.ts`](./src/08_graphs/04_course_schedule.ts)

---

## 9. Intervals & Dynamic Programming (Basics Only)
> **Core Concepts:** Sorting intervals, Overlap conditions, 1D DP memoization & tabulation, Unbounded Knapsack (Coin Change).

- [x] **#56** - [Merge Intervals](https://leetcode.com/problems/merge-intervals/) `Medium` ➔ [`src/09_intervals_and_dp/01_merge_intervals.ts`](./src/09_intervals_and_dp/01_merge_intervals.ts)
- [x] **#57** - [Insert Interval](https://leetcode.com/problems/insert-interval/) `Medium` ➔ [`src/09_intervals_and_dp/02_insert_interval.ts`](./src/09_intervals_and_dp/02_insert_interval.ts)
- [x] **#70** - [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) `Easy` ➔ [`src/09_intervals_and_dp/03_climbing_stairs.ts`](./src/09_intervals_and_dp/03_climbing_stairs.ts)
- [x] **#198** - [House Robber](https://leetcode.com/problems/house-robber/) `Medium` ➔ [`src/09_intervals_and_dp/04_house_robber.ts`](./src/09_intervals_and_dp/04_house_robber.ts)
- [x] **#322** - [Coin Change](https://leetcode.com/problems/coin-change/) `Medium` ➔ [`src/09_intervals_and_dp/05_coin_change.ts`](./src/09_intervals_and_dp/05_coin_change.ts)
#   l e a r n _ d s a  
 
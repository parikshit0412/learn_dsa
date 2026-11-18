# 🎯 The #1 Most-Asked DSA Interview Question per Topic

A curated interview guide highlighting the single most frequent, high-yield question for every core DSA pattern, analyzed across real interview data from **Google, Meta, Amazon, Microsoft, Apple, Bloomberg, and AI frontier labs (OpenAI, Anthropic, Databricks)**.

---

## 📌 Quick Navigation

1. [Arrays & Hashing](#1-arrays--hashing)
2. [Two Pointers](#2-two-pointers)
3. [Sliding Window](#3-sliding-window)
4. [Stack & Monotonic Stack](#4-stack--monotonic-stack)
5. [Linked List & Fast/Slow Pointers](#5-linked-list--fast--slow-pointers)
6. [Binary Search](#6-binary-search)
7. [Trees & Binary Search Trees (BST)](#7-trees--binary-search-trees-bst)
8. [Heaps & Priority Queues](#8-heaps--priority-queues)
9. [Graphs & Matrix Traversal](#9-graphs--matrix-traversal)
10. [1D Dynamic Programming](#10-1d-dynamic-programming)
11. [2D Dynamic Programming & Sequence Alignment](#11-2d-dynamic-programming--sequence-alignment)
12. [Intervals](#12-intervals)
13. [Backtracking](#13-backtracking)
14. [Tries (Prefix Trees)](#14-tries-prefix-trees)
15. [Disjoint Set Union (Union-Find / DSU)](#15-disjoint-set-union-union-find--dsu)
16. [System DSA & Caches](#16-system-dsa--caches)

---

## 1. Arrays & Hashing

### 👑 The #1 Most Asked Question:
**[LeetCode #1 - Two Sum](https://leetcode.com/problems/two-sum/)** (Runner-up: **[#49 - Group Anagrams](https://leetcode.com/problems/group-anagrams/)**)

* **Difficulty:** Easy
* **Primary Asking Companies:** Google, Amazon, Meta, Microsoft, Apple, Bloomberg
* **Code in Repo:** 
  * [TypeScript: `src/01_arrays_and_hashing/01_two_sum.ts`](./src/01_arrays_and_hashing/01_two_sum.ts)
  * [Python: `python/01_arrays_and_hashing/01_two_sum.py`](./python/01_arrays_and_hashing/01_two_sum.py)

#### 🎯 Why Interviewers Ask It:
* It tests if a candidate understands the classic **time-space trade-off**: upgrading from $O(n^2)$ brute force to $O(n)$ by paying $O(n)$ auxiliary hash map space.
* Tests clean single-pass complement lookup logic (`target - num`).

#### 💡 Pattern Trigger:
> *"Find two elements that satisfy condition $A + B = K$."* $\rightarrow$ Store complement `K - A` in a Hash Map.

#### ⏱️ Optimal Complexity:
* **Time:** $O(n)$ — Single pass.
* **Space:** $O(n)$ — Hash map of size up to $n$.

#### 🔥 Common Follow-Up Variations:
1. *What if the array is already sorted?* $\rightarrow$ Use **Two Pointers** in $O(1)$ space ([Two Sum II - #167](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)).
2. *What if you need 3 numbers summing to 0?* $\rightarrow$ **3Sum** ([#15](https://leetcode.com/problems/3sum/)).
3. *What if data is too big to fit in RAM?* $\rightarrow$ External sort or distributed hash partitioning.

---

## 2. Two Pointers

### 👑 The #1 Most Asked Question:
**[LeetCode #15 - 3Sum](https://leetcode.com/problems/3sum/)**

* **Difficulty:** Medium
* **Primary Asking Companies:** Meta (extremely high frequency), Amazon, Microsoft, Apple, Uber
* **Code in Repo:** 
  * [TypeScript: `src/02_two_pointers/02_3sum.ts`](./src/02_two_pointers/02_3sum.ts)
  * [Python: `python/02_two_pointers/02_3sum.py`](./python/02_two_pointers/02_3sum.py)

#### 🎯 Why Interviewers Ask It:
* Tests duplicate handling without relying on slow `Set<string>` serialization.
* Verifies whether you know how to reduce an $O(n^3)$ cubic search down to $O(n^2)$ by sorting first.

#### 💡 Pattern Trigger:
> *"Find unique combinations of 2 or 3 elements in an array."* $\rightarrow$ Sort array, fix outer pointer, converge inward with two pointers.

#### ⏱️ Optimal Complexity:
* **Time:** $O(n^2)$ — $O(n \log n)$ sort + $O(n)$ two-pointer sweep for each of the $n$ items.
* **Space:** $O(1)$ or $O(\log n)$ (sorting stack only).

#### 🔥 Common Follow-Up Variations:
1. *3Sum Closest:* Find triplet sum closest to target ([#16](https://leetcode.com/problems/3sum-closest/)).
2. *4Sum:* Generalize to $k$-sum using recursion ([#18](https://leetcode.com/problems/4sum/)).

---

## 3. Sliding Window

### 👑 The #1 Most Asked Question:
**[LeetCode #3 - Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)**

* **Difficulty:** Medium
* **Primary Asking Companies:** Amazon, Microsoft, Google, Meta, Bloomberg, Apple
* **Code in Repo:** 
  * [TypeScript: `src/03_sliding_window/02_longest_substring_without_repeating_characters.ts`](./src/03_sliding_window/02_longest_substring_without_repeating_characters.ts)
  * [Python: `python/03_sliding_window/02_longest_substring_without_repeating_characters.py`](./python/03_sliding_window/02_longest_substring_without_repeating_characters.py)

#### 🎯 Why Interviewers Ask It:
* Tests dynamic window contraction. Candidates frequently make the mistake of shifting `left` by only 1 step instead of jumping directly past the duplicate.

#### 💡 Pattern Trigger:
> *"Find longest/shortest contiguous subarray/substring satisfying a uniqueness or frequency constraint."* $\rightarrow$ Expand with `right`, contract with `left` using a hash map of last seen indices.

#### ⏱️ Optimal Complexity:
* **Time:** $O(n)$ — Each character visited at most twice.
* **Space:** $O(\min(m, n))$ where $m$ is the alphabet size (at most 128 ASCII / 26 letters).

#### 🔥 Common Follow-Up Variations:
1. *Allow up to $k$ replacements:* **Longest Repeating Character Replacement** ([#424](https://leetcode.com/problems/longest-repeating-character-replacement/)).
2. *Contain all characters of another string:* **Minimum Window Substring** ([#76](https://leetcode.com/problems/minimum-window-substring/)).

---

## 4. Stack & Monotonic Stack

### 👑 The #1 Most Asked Question:
**[LeetCode #739 - Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)** (Runner-up: **[#20 - Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)**)

* **Difficulty:** Medium
* **Primary Asking Companies:** Meta, Google, Amazon, Bloomberg
* **Code in Repo:** 
  * [TypeScript: `src/04_stack/03_daily_temperatures.ts`](./src/04_stack/03_daily_temperatures.ts)
  * [Python: `python/04_stack/03_daily_temperatures.py`](./python/04_stack/03_daily_temperatures.py)

#### 🎯 Why Interviewers Ask It:
* Validates whether a candidate recognizes the **Monotonic Stack pattern** (maintaining an invariant of ascending or descending values) vs. naive $O(n^2)$ nested loops.

#### 💡 Pattern Trigger:
> *"Find the next greater element / next smaller element / days until warmer."* $\rightarrow$ Store **indices** in a monotonic decreasing stack.

#### ⏱️ Optimal Complexity:
* **Time:** $O(n)$ — Every element is pushed and popped at most once.
* **Space:** $O(n)$ — Stack storage.

#### 🔥 Common Follow-Up Variations:
1. *Circular array:* Look for next greater element wrapping around to index 0 ([#503](https://leetcode.com/problems/next-greater-element-ii/)).
2. *Largest Rectangle in Histogram:* Finding left and right smaller bounds ([#84](https://leetcode.com/problems/largest-rectangle-in-histogram/)).

---

## 5. Linked List & Fast / Slow Pointers

### 👑 The #1 Most Asked Question:
**[LeetCode #146 - LRU Cache](https://leetcode.com/problems/lru-cache/)** (Runner-up: **[#206 - Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)**)

* **Difficulty:** Medium (High-Frequency Standard)
* **Primary Asking Companies:** Amazon, Google, Microsoft, Meta, Apple, Stripe, Databricks
* **Code in Repo:** 
  * [TypeScript: `src/05_linked_list/05_lru_cache.ts`](./src/05_linked_list/05_lru_cache.ts)
  * [Python: `python/05_linked_list/05_lru_cache.py`](./python/05_linked_list/05_lru_cache.py)

#### 🎯 Why Interviewers Ask It:
* Combines **Object-Oriented Design**, pointer manipulation, and data structure composition.
* Proves you know why a Hash Map alone cannot maintain order, and why a singly linked list cannot achieve $O(1)$ removal (needs Doubly Linked List with dummy head/tail sentinels).

#### 💡 Pattern Trigger:
> *"Design a cache with $O(1)$ lookups and $O(1)$ eviction of least recently used item."* $\rightarrow$ `Map<Key, Node>` + `DoublyLinkedList`.

#### ⏱️ Optimal Complexity:
* **Time:** $O(1)$ for both `get()` and `put()`.
* **Space:** $O(\text{capacity})$.

#### 🔥 Common Follow-Up Variations:
1. *Thread Safety:* How would you handle concurrency? (Read-write locks, synchronized blocks).
2. *LFU Cache:* Evict least *frequently* used instead of recently used ([#460](https://leetcode.com/problems/lfu-cache/)).

---

## 6. Binary Search

### 👑 The #1 Most Asked Question:
**[LeetCode #33 - Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)**

* **Difficulty:** Medium
* **Primary Asking Companies:** Meta, Amazon, Microsoft, Google, Bloomberg
* **Code in Repo:** 
  * [TypeScript: `src/06_binary_search/02_search_in_rotated_sorted_array.ts`](./src/06_binary_search/02_search_in_rotated_sorted_array.ts)
  * [Python: `python/06_binary_search/02_search_in_rotated_sorted_array.py`](./python/06_binary_search/02_search_in_rotated_sorted_array.py)

#### 🎯 Why Interviewers Ask It:
* Tests whether you truly grasp binary search invariants beyond textbook sorted arrays: **in any rotated sorted array, at least one half is always strictly sorted**.

#### 💡 Pattern Trigger:
> *"Logarithmic search in a sorted array shifted/rotated at an unknown pivot."* $\rightarrow$ Split by `mid`, identify which half is sorted, check if target lies within its bounds.

#### ⏱️ Optimal Complexity:
* **Time:** $O(\log n)$.
* **Space:** $O(1)$.

#### 🔥 Common Follow-Up Variations:
1. *What if duplicates are allowed?* $\rightarrow$ Worst case degrades to $O(n)$ when `nums[low] === nums[mid] === nums[high]` ([#81](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)).
2. *Find the minimum element in rotated array:* ([#153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)).

---

## 7. Trees & Binary Search Trees (BST)

### 👑 The #1 Most Asked Question:
**[LeetCode #236 - Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)** (BST variant: **[#235](https://leetcode.com/problems/lowest-common-ancestor-of-a-bst/)**)

* **Difficulty:** Medium
* **Primary Asking Companies:** Meta, Amazon, Microsoft, Google, Apple
* **Code in Repo:** 
  * [TypeScript: `src/07_trees/05_lowest_common_ancestor_of_a_bst.ts`](./src/07_trees/05_lowest_common_ancestor_of_a_bst.ts)
  * [Python: `python/07_trees/05_lowest_common_ancestor_of_a_bst.py`](./python/07_trees/05_lowest_common_ancestor_of_a_bst.py)

#### 🎯 Why Interviewers Ask It:
* Evaluates recursive post-order tree propagation: bubbling values from child subtrees up to parent nodes.

#### 💡 Pattern Trigger:
> *"Find divergence point of two nodes in a tree."* $\rightarrow$ In BST: compare node values with `p` and `q`. In general binary tree: post-order DFS checking if `left` and `right` both returned non-null.

#### ⏱️ Optimal Complexity:
* **Time:** $O(h)$ for BST where $h$ is height; $O(n)$ for arbitrary Binary Tree.
* **Space:** $O(1)$ iterative for BST; $O(h)$ recursion stack for Binary Tree.

---

## 8. Heaps & Priority Queues

### 👑 The #1 Most Asked Question:
**[LeetCode #295 - Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)** (Runner-up: **[#215 - Kth Largest](https://leetcode.com/problems/kth-largest-element-in-an-array/)**)

* **Difficulty:** Hard
* **Primary Asking Companies:** Google, Amazon, Meta, Microsoft, OpenAI, Citadel
* **Code in Repo:** 
  * [TypeScript: `src/11_heaps_and_priority_queues/02_find_median_from_data_stream.ts`](./src/11_heaps_and_priority_queues/02_find_median_from_data_stream.ts)
  * [Python: `python/11_heaps_and_priority_queues/02_find_median_from_data_stream.py`](./python/11_heaps_and_priority_queues/02_find_median_from_data_stream.py)

#### 🎯 Why Interviewers Ask It:
* Tests the **Two-Heap pattern** (Max-Heap for lower half, Min-Heap for upper half), which is the foundation of online quantiles, streaming metrics (p50/p99 latency), and dynamic balancing.

#### 💡 Pattern Trigger:
> *"Dynamically track median or balance point in an incoming stream of numbers."* $\rightarrow$ Balance two heaps of equal size.

#### ⏱️ Optimal Complexity:
* **Time:** `addNum`: $O(\log n)$, `findMedian`: $O(1)$.
* **Space:** $O(n)$.

---

## 9. Graphs & Matrix Traversal

### 👑 The #1 Most Asked Question:
**[LeetCode #200 - Number of Islands](https://leetcode.com/problems/number-of-islands/)** (Runner-up: **[#207 - Course Schedule](https://leetcode.com/problems/course-schedule/)**)

* **Difficulty:** Medium
* **Primary Asking Companies:** Amazon (most frequent question in Amazon history), Google, Bloomberg, Microsoft, Meta
* **Code in Repo:** 
  * [TypeScript: `src/08_graphs/01_number_of_islands.ts`](./src/08_graphs/01_number_of_islands.ts)
  * [Python: `python/08_graphs/01_number_of_islands.py`](./python/08_graphs/01_number_of_islands.py)

#### 🎯 Why Interviewers Ask It:
* The quintessential test for 2D grid boundary checking, multi-directional search (DFS/BFS), and connected components / flood fill.

#### 💡 Pattern Trigger:
> *"Count connected clusters of 1s in a grid."* $\rightarrow$ Iterate grid; upon encountering unvisited `'1'`, launch DFS/BFS to mutate connected land to `'0'`.

#### ⏱️ Optimal Complexity:
* **Time:** $O(m \times n)$ — Each cell visited constant times.
* **Space:** $O(m \times n)$ recursion stack (or BFS queue).

#### 🔥 Common Follow-Up Variations:
1. *Return max area instead of count:* **Max Area of Island** ([#695](https://leetcode.com/problems/max-area-of-island/)).
2. *Multi-source BFS simultaneous spread:* **Rotting Oranges** ([#994](https://leetcode.com/problems/rotting-oranges/)).

---

## 10. 1D Dynamic Programming

### 👑 The #1 Most Asked Question:
**[LeetCode #322 - Coin Change](https://leetcode.com/problems/coin-change/)**

* **Difficulty:** Medium
* **Primary Asking Companies:** Amazon, Microsoft, Bloomberg, Google, Meta
* **Code in Repo:** 
  * [TypeScript: `src/09_intervals_and_dp/05_coin_change.ts`](./src/09_intervals_and_dp/05_coin_change.ts)
  * [Python: `python/09_intervals_and_dp/05_coin_change.py`](./python/09_intervals_and_dp/05_coin_change.py)

#### 🎯 Why Interviewers Ask It:
* Classic Unbounded Knapsack problem. Exposes whether a candidate falls into greedy trap (e.g. always picking the largest coin first fails for coins `[1, 3, 4]`, amount `6`).

#### 💡 Pattern Trigger:
> *"Fewest coins/items to reach a target sum with infinite supply."* $\rightarrow$ `dp[a] = min(dp[a], 1 + dp[a - coin])`.

#### ⏱️ Optimal Complexity:
* **Time:** $O(\text{amount} \times n)$ where $n$ is number of coin denominations.
* **Space:** $O(\text{amount})$ 1D DP table.

---

## 11. 2D Dynamic Programming & Sequence Alignment

### 👑 The #1 Most Asked Question:
**[LeetCode #72 - Edit Distance](https://leetcode.com/problems/edit-distance/)** (Runner-up: **[#1143 - Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)**)

* **Difficulty:** Medium / Hard
* **Primary Asking Companies:** Google, Amazon, Microsoft, OpenAI, Anthropic
* **Code in Repo:** 
  * [TypeScript: `src/14_2d_dp_and_alignment/02_edit_distance.ts`](./src/14_2d_dp_and_alignment/02_edit_distance.ts)
  * [Python: `python/14_2d_dp_and_alignment/02_edit_distance.py`](./python/14_2d_dp_and_alignment/02_edit_distance.py)

#### 🎯 Why Interviewers Ask It:
* The core algorithm behind **diff tools**, **spell checkers**, **Word Error Rate (WER) in Speech AI**, and sequence alignment in biology.
* Tests 3-way branch DP transitions: insertion, deletion, replacement.

#### 💡 Pattern Trigger:
> *"Minimum operations to transform string A into string B."* $\rightarrow$ 2D table `dp[i][j]` taking `1 + min(insert, delete, replace)`.

#### ⏱️ Optimal Complexity:
* **Time:** $O(m \times n)$ where $m$ and $n$ are string lengths.
* **Space:** $O(m \times n)$ (or $O(\min(m, n))$ with two-row rolling array).

---

## 12. Intervals

### 👑 The #1 Most Asked Question:
**[LeetCode #56 - Merge Intervals](https://leetcode.com/problems/merge-intervals/)**

* **Difficulty:** Medium
* **Primary Asking Companies:** Meta, Google, Amazon, Microsoft, Bloomberg, Apple
* **Code in Repo:** 
  * [TypeScript: `src/09_intervals_and_dp/01_merge_intervals.ts`](./src/09_intervals_and_dp/01_merge_intervals.ts)
  * [Python: `python/09_intervals_and_dp/01_merge_intervals.py`](./python/09_intervals_and_dp/01_merge_intervals.py)

#### 🎯 Why Interviewers Ask It:
* Tests whether candidate knows that sorting by start time simplifies a 2D geometric problem into a linear single sweep.

#### 💡 Pattern Trigger:
> *"Overlap conditions on time ranges `[start, end]`."* $\rightarrow$ Sort by `start_i`; if `current.start <= prev.end`, merge by extending `prev.end = max(prev.end, current.end)`.

#### ⏱️ Optimal Complexity:
* **Time:** $O(n \log n)$ — Dominated by sorting.
* **Space:** $O(n)$ — Result array storage.

---

## 13. Backtracking

### 👑 The #1 Most Asked Question:
**[LeetCode #79 - Word Search](https://leetcode.com/problems/word-search/)** (Runner-up: **[#78 - Subsets](https://leetcode.com/problems/subsets/)**)

* **Difficulty:** Medium
* **Primary Asking Companies:** Microsoft, Amazon, Meta, Bloomberg
* **Code in Repo:** 
  * [TypeScript: `src/13_backtracking/02_word_search.ts`](./src/13_backtracking/02_word_search.ts)
  * [Python: `python/13_backtracking/02_word_search.py`](./python/13_backtracking/02_word_search.py)

#### 🎯 Why Interviewers Ask It:
* Tests state restoration: mutating a visited cell to `#` during exploration and cleanly restoring it back upon recursion backtrack.

#### 💡 Pattern Trigger:
> *"Find path on a grid or generate valid combinations with constraints."* $\rightarrow$ Choose $\rightarrow$ Explore $\rightarrow$ Un-choose (Backtrack).

#### ⏱️ Optimal Complexity:
* **Time:** $O(m \times n \times 4^L)$ where $L$ is word length.
* **Space:** $O(L)$ for recursion stack.

---

## 14. Tries (Prefix Trees)

### 👑 The #1 Most Asked Question:
**[LeetCode #208 - Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)**

* **Difficulty:** Medium
* **Primary Asking Companies:** Google, Amazon, Microsoft, OpenAI, Twitter/X
* **Code in Repo:** 
  * [TypeScript: `src/10_tries/01_implement_trie.ts`](./src/10_tries/01_implement_trie.ts)
  * [Python: `python/10_tries/01_implement_trie.py`](./python/10_tries/01_implement_trie.py)

#### 🎯 Why Interviewers Ask It:
* Directly powers **tokenizers (BPE / WordPiece)**, prompt prefix caching in LLM serving engines, and search autocomplete.

#### 💡 Pattern Trigger:
> *"Prefix search, dictionary lookups, or autocomplete."* $\rightarrow$ Tree of character nodes with `isEndOfWord` flag.

#### ⏱️ Optimal Complexity:
* **Time:** $O(m)$ for `insert`, `search`, and `startsWith` where $m$ is word length.
* **Space:** $O(N \times m)$ where $N$ is number of keys.

---

## 15. Disjoint Set Union (Union-Find / DSU)

### 👑 The #1 Most Asked Question:
**[LeetCode #721 - Accounts Merge](https://leetcode.com/problems/accounts-merge/)** (Graph connectivity: **[#547 - Number of Provinces](https://leetcode.com/problems/number-of-provinces/)**)

* **Difficulty:** Medium
* **Primary Asking Companies:** Meta (very high frequency), Google, Amazon, Databricks
* **Code in Repo:** 
  * [TypeScript: `src/12_union_find/02_accounts_merge.ts`](./src/12_union_find/02_accounts_merge.ts)
  * [Python: `python/12_union_find/02_accounts_merge.py`](./python/12_union_find/02_accounts_merge.py)

#### 🎯 Why Interviewers Ask It:
* Real-world application in **data deduplication** (Common Crawl / web pretraining data) and entity resolution across user accounts.

#### 💡 Pattern Trigger:
> *"Group or merge entities dynamically when they share an identifier."* $\rightarrow$ Union-Find with path compression.

#### ⏱️ Optimal Complexity:
* **Time:** $O(A \times k \log(A \times k))$ where $A$ is accounts count and $k$ is max emails.
* **Space:** $O(A \times k)$.

---

## 16. System DSA & Caches

### 👑 The #1 Most Asked Question:
**Token Bucket Rate Limiter**

* **Difficulty:** Medium (System DSA)
* **Primary Asking Companies:** Stripe, OpenAI, Anthropic, AWS, Cloudflare
* **Code in Repo:** 
  * [TypeScript: `src/15_ai_system_dsa/01_token_bucket_rate_limiter.ts`](./src/15_ai_system_dsa/01_token_bucket_rate_limiter.ts)
  * [Python: `python/15_ai_system_dsa/01_token_bucket_rate_limiter.py`](./python/15_ai_system_dsa/01_token_bucket_rate_limiter.py)

#### 🎯 Why Interviewers Ask It:
* Every modern API (OpenAI, Anthropic, Stripe) protects endpoints using Requests-Per-Minute (RPM) and Tokens-Per-Minute (TPM) rate limiters.
* Tests **lazy evaluation** vs wasteful background threads.

#### 💡 Pattern Trigger:
> *"Throttle API traffic or enforce burst capacity with constant refill rate."* $\rightarrow$ On every incoming request, compute `elapsedTime * refillRate`, add accrued tokens up to `capacity`.

#### ⏱️ Optimal Complexity:
* **Time:** $O(1)$ per rate limit check.
* **Space:** $O(1)$ per client bucket.

---

## 🏆 Summary Cheat Sheet

| Topic | #1 Most Asked Problem | Core Technique | Target Time |
|---|---|---|:---:|
| **Arrays & Hashing** | [#1 Two Sum](https://leetcode.com/problems/two-sum/) | Hash Map complement lookup | $O(n)$ |
| **Two Pointers** | [#15 3Sum](https://leetcode.com/problems/3sum/) | Sort + Inward Converging Pointers | $O(n^2)$ |
| **Sliding Window** | [#3 Longest Substring](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | Dynamic Window + Last Seen Index Map | $O(n)$ |
| **Monotonic Stack**| [#739 Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | Decreasing Stack of Indices | $O(n)$ |
| **Linked List** | [#146 LRU Cache](https://leetcode.com/problems/lru-cache/) | Hash Map + Doubly Linked List | $O(1)$ |
| **Binary Search** | [#33 Search in Rotated Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | Halve via Sorted-Half Invariant | $O(\log n)$ |
| **Trees** | [#236 Lowest Common Ancestor](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | Post-order DFS subtree propagation | $O(n)$ |
| **Heaps** | [#295 Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | Dual Heaps (Max-Heap + Min-Heap) | $O(\log n)$ |
| **Graphs** | [#200 Number of Islands](https://leetcode.com/problems/number-of-islands/) | 2D Flood Fill (DFS/BFS) | $O(m \times n)$ |
| **1D DP** | [#322 Coin Change](https://leetcode.com/problems/coin-change/) | Unbounded Knapsack Tabulation | $O(A \times n)$ |
| **2D DP / Alignment**| [#72 Edit Distance](https://leetcode.com/problems/edit-distance/) | 3-way Transition (Insert/Delete/Replace) | $O(m \times n)$ |
| **Intervals** | [#56 Merge Intervals](https://leetcode.com/problems/merge-intervals/) | Sort by start + Linear greedy merge | $O(n \log n)$ |
| **Backtracking** | [#79 Word Search](https://leetcode.com/problems/word-search/) | Grid DFS with in-place character restore | $O(m \cdot n \cdot 4^L)$ |
| **Tries** | [#208 Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/) | Character tree for prefix matching | $O(m)$ |
| **Union-Find** | [#721 Accounts Merge](https://leetcode.com/problems/accounts-merge/) | DSU with Path Compression | $O(N \alpha(N))$ |
| **System DSA** | Token Bucket Rate Limiter | Lazy timestamp-based refill math | $O(1)$ |

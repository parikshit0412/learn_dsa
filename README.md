# 🚀 Curated DSA Problem List: TypeScript & Python Solutions

A comprehensive, production-grade repository containing clean, optimal, and line-by-line commented solutions for **47 high-frequency DSA problems** across **15 essential patterns** (including the **AI-Era interview curriculum**), available in both **TypeScript** and **Python 3**.

> 🎯 **Interview Prep Guide:** Check out [MOST_ASKED_DSA_QUESTIONS.md](./MOST_ASKED_DSA_QUESTIONS.md) for a curated breakdown of the single most-asked question per topic, complete with company frequency, interview signals, pattern triggers, and follow-up variations!

---

## 📊 Summary & Progress Tracker

| Category | Easy | Medium | Hard | Total | TypeScript | Python | AI Relevance |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1. [Arrays & Hashing](#1-arrays--hashing-foundation) | 1 | 4 | 0 | 5 | ✅ 5 / 5 | ✅ 5 / 5 | Core Data Structures |
| 2. [Two Pointers](#2-two-pointers) | 1 | 2 | 0 | 3 | ✅ 3 / 3 | ✅ 3 / 3 | In-place Optimization |
| 3. [Sliding Window](#3-sliding-window-crucial-for-streamarray-data) | 1 | 2 | 0 | 3 | ✅ 3 / 3 | ✅ 3 / 3 | Streaming & Context Windows |
| 4. [Stack & Monotonic Stack](#4-stack--monotonic-stack) | 1 | 2 | 0 | 3 | ✅ 3 / 3 | ✅ 3 / 3 | Parsing & Bracket Matching |
| 5. [Fast & Slow Pointers / Linked List](#5-fast--slow-pointers--linked-list) | 3 | 2 | 0 | 5 | ✅ 5 / 5 | ✅ 5 / 5 | Cache Architecture (LRU) |
| 6. [Binary Search](#6-binary-search-search-space-optimization) | 1 | 2 | 0 | 3 | ✅ 3 / 3 | ✅ 3 / 3 | Parameter Search & Invariants |
| 7. [Trees & BST](#7-trees--binary-search-trees-dfs--bfs) | 2 | 3 | 0 | 5 | ✅ 5 / 5 | ✅ 5 / 5 | Hierarchical Data & ASTs |
| 8. [Graphs & Matrix Traversal](#8-graphs--matrix-traversal-grid-bfsdfs) | 0 | 4 | 0 | 4 | ✅ 4 / 4 | ✅ 4 / 4 | Agent Workflows & DAGs |
| 9. [Intervals & Dynamic Programming](#9-intervals--dynamic-programming-basics-only) | 1 | 4 | 0 | 5 | ✅ 5 / 5 | ✅ 5 / 5 | Decision Boundaries & DP |
| 10. [Tries (Prefix Trees)](#10-tries-prefix-trees---ai-tokenizers) 🤖 | 0 | 2 | 0 | 2 | ✅ 2 / 2 | ✅ 2 / 2 | **BPE Tokenizers & Prefix Cache** |
| 11. [Heaps & Priority Queues](#11-heaps--priority-queues---beam-search--quantiles) 🤖 | 0 | 1 | 1 | 2 | ✅ 2 / 2 | ✅ 2 / 2 | **Beam Search & Top-P Sampling** |
| 12. [Union-Find / DSU](#12-union-find--dsu---clustering--deduplication) 🤖 | 0 | 2 | 0 | 2 | ✅ 2 / 2 | ✅ 2 / 2 | **Dataset Deduplication & Entities** |
| 13. [Backtracking & State Search](#13-backtracking--state-search---tree-of-thoughts) 🤖 | 0 | 2 | 0 | 2 | ✅ 2 / 2 | ✅ 2 / 2 | **Tree-of-Thoughts Reasoning** |
| 14. [2D DP & Alignment](#14-2d-dp--alignment---llm-evaluation--metrics) 🤖 | 0 | 2 | 0 | 2 | ✅ 2 / 2 | ✅ 2 / 2 | **ROUGE-L, Word Error Rate (WER)** |
| 15. [AI System DSA (Rate Limiting)](#15-ai-system-dsa---llm-serving-gateways) 🤖 | 0 | 1 | 0 | 1 | ✅ 1 / 1 | ✅ 1 / 1 | **RPM & TPM Token Bucket** |
| **Total** | **11** | **33** | **3** | **47** | **✅ 47 / 47** | **✅ 47 / 47** | **Complete Suite** |

---

## 🛠️ How to Run & Verify Solutions

### TypeScript
```bash
# Typecheck
npm run typecheck

# Verify all 47 TypeScript solutions
npm run verify:ts

# Run any individual file
npx tsx src/10_tries/01_implement_trie.ts
```

### Python
```bash
# Verify all 47 Python solutions
npm run verify:py

# Run any individual file
python python/10_tries/01_implement_trie.py
```

### Run Everything (Both TypeScript & Python)
```bash
npm run verify:all
```

---

## 1. Arrays & Hashing (Foundation)
| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #1 | [Two Sum](https://leetcode.com/problems/two-sum/) | `Easy` | [`src/.../01_two_sum.ts`](./src/01_arrays_and_hashing/01_two_sum.ts) | [`python/.../01_two_sum.py`](./python/01_arrays_and_hashing/01_two_sum.py) |
| #49 | [Group Anagrams](https://leetcode.com/problems/group-anagrams/) | `Medium` | [`src/.../02_group_anagrams.ts`](./src/01_arrays_and_hashing/02_group_anagrams.ts) | [`python/.../02_group_anagrams.py`](./python/01_arrays_and_hashing/02_group_anagrams.py) |
| #347 | [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) | `Medium` | [`src/.../03_top_k_frequent_elements.ts`](./src/01_arrays_and_hashing/03_top_k_frequent_elements.ts) | [`python/.../03_top_k_frequent_elements.py`](./python/01_arrays_and_hashing/03_top_k_frequent_elements.py) |
| #238 | [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) | `Medium` | [`src/.../04_product_of_array_except_self.ts`](./src/01_arrays_and_hashing/04_product_of_array_except_self.ts) | [`python/.../04_product_of_array_except_self.py`](./python/01_arrays_and_hashing/04_product_of_array_except_self.py) |
| #128 | [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) | `Medium` | [`src/.../05_longest_consecutive_sequence.ts`](./src/01_arrays_and_hashing/05_longest_consecutive_sequence.ts) | [`python/.../05_longest_consecutive_sequence.py`](./python/01_arrays_and_hashing/05_longest_consecutive_sequence.py) |

---

## 2. Two Pointers
| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #125 | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) | `Easy` | [`src/.../01_valid_palindrome.ts`](./src/02_two_pointers/01_valid_palindrome.ts) | [`python/.../01_valid_palindrome.py`](./python/02_two_pointers/01_valid_palindrome.py) |
| #15 | [3Sum](https://leetcode.com/problems/3sum/) | `Medium` | [`src/.../02_3sum.ts`](./src/02_two_pointers/02_3sum.ts) | [`python/.../02_3sum.py`](./python/02_two_pointers/02_3sum.py) |
| #11 | [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) | `Medium` | [`src/.../03_container_with_most_water.ts`](./src/02_two_pointers/03_container_with_most_water.ts) | [`python/.../03_container_with_most_water.py`](./python/02_two_pointers/03_container_with_most_water.py) |

---

## 3. Sliding Window
| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #121 | [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | `Easy` | [`src/.../01_best_time_to_buy_and_sell_stock.ts`](./src/03_sliding_window/01_best_time_to_buy_and_sell_stock.ts) | [`python/.../01_best_time_to_buy_and_sell_stock.py`](./python/03_sliding_window/01_best_time_to_buy_and_sell_stock.py) |
| #3 | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | `Medium` | [`src/.../02_longest_substring_without_repeating_characters.ts`](./src/03_sliding_window/02_longest_substring_without_repeating_characters.ts) | [`python/.../02_longest_substring_without_repeating_characters.py`](./python/03_sliding_window/02_longest_substring_without_repeating_characters.py) |
| #424 | [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) | `Medium` | [`src/.../03_longest_repeating_character_replacement.ts`](./src/03_sliding_window/03_longest_repeating_character_replacement.ts) | [`python/.../03_longest_repeating_character_replacement.py`](./python/03_sliding_window/03_longest_repeating_character_replacement.py) |

---

## 4. Stack & Monotonic Stack
| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #20 | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) | `Easy` | [`src/.../01_valid_parentheses.ts`](./src/04_stack/01_valid_parentheses.ts) | [`python/.../01_valid_parentheses.py`](./python/04_stack/01_valid_parentheses.py) |
| #155 | [Min Stack](https://leetcode.com/problems/min-stack/) | `Medium` | [`src/.../02_min_stack.ts`](./src/04_stack/02_min_stack.ts) | [`python/.../02_min_stack.py`](./python/04_stack/02_min_stack.py) |
| #739 | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | `Medium` | [`src/.../03_daily_temperatures.ts`](./src/04_stack/03_daily_temperatures.ts) | [`python/.../03_daily_temperatures.py`](./python/04_stack/03_daily_temperatures.py) |

---

## 5. Fast & Slow Pointers / Linked List
| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #206 | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/) | `Easy` | [`src/.../01_reverse_linked_list.ts`](./src/05_linked_list/01_reverse_linked_list.ts) | [`python/.../01_reverse_linked_list.py`](./python/05_linked_list/01_reverse_linked_list.py) |
| #21 | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) | `Easy` | [`src/.../02_merge_two_sorted_lists.ts`](./src/05_linked_list/02_merge_two_sorted_lists.ts) | [`python/.../02_merge_two_sorted_lists.py`](./python/05_linked_list/02_merge_two_sorted_lists.py) |
| #141 | [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/) | `Easy` | [`src/.../03_linked_list_cycle.ts`](./src/05_linked_list/03_linked_list_cycle.ts) | [`python/.../03_linked_list_cycle.py`](./python/05_linked_list/03_linked_list_cycle.py) |
| #19 | [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) | `Medium` | [`src/.../04_remove_nth_node_from_end_of_list.ts`](./src/05_linked_list/04_remove_nth_node_from_end_of_list.ts) | [`python/.../04_remove_nth_node_from_end_of_list.py`](./python/05_linked_list/04_remove_nth_node_from_end_of_list.py) |
| #146 | [LRU Cache](https://leetcode.com/problems/lru-cache/) | `Medium` | [`src/.../05_lru_cache.ts`](./src/05_linked_list/05_lru_cache.ts) | [`python/.../05_lru_cache.py`](./python/05_linked_list/05_lru_cache.py) |

---

## 6. Binary Search
| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #704 | [Binary Search](https://leetcode.com/problems/binary-search/) | `Easy` | [`src/.../01_binary_search.ts`](./src/06_binary_search/01_binary_search.ts) | [`python/.../01_binary_search.py`](./python/06_binary_search/01_binary_search.py) |
| #33 | [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) | `Medium` | [`src/.../02_search_in_rotated_sorted_array.ts`](./src/06_binary_search/02_search_in_rotated_sorted_array.ts) | [`python/.../02_search_in_rotated_sorted_array.py`](./python/06_binary_search/02_search_in_rotated_sorted_array.py) |
| #153 | [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | `Medium` | [`src/.../03_find_minimum_in_rotated_sorted_array.ts`](./src/06_binary_search/03_find_minimum_in_rotated_sorted_array.ts) | [`python/.../03_find_minimum_in_rotated_sorted_array.py`](./python/06_binary_search/03_find_minimum_in_rotated_sorted_array.py) |

---

## 7. Trees & BST
| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #226 | [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) | `Easy` | [`src/.../01_invert_binary_tree.ts`](./src/07_trees/01_invert_binary_tree.ts) | [`python/.../01_invert_binary_tree.py`](./python/07_trees/01_invert_binary_tree.py) |
| #104 | [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | `Easy` | [`src/.../02_maximum_depth_of_binary_tree.ts`](./src/07_trees/02_maximum_depth_of_binary_tree.ts) | [`python/.../02_maximum_depth_of_binary_tree.py`](./python/07_trees/02_maximum_depth_of_binary_tree.py) |
| #98 | [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) | `Medium` | [`src/.../03_validate_binary_search_tree.ts`](./src/07_trees/03_validate_binary_search_tree.ts) | [`python/.../03_validate_binary_search_tree.py`](./python/07_trees/03_validate_binary_search_tree.py) |
| #102 | [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) | `Medium` | [`src/.../04_binary_tree_level_order_traversal.ts`](./src/07_trees/04_binary_tree_level_order_traversal.ts) | [`python/.../04_binary_tree_level_order_traversal.py`](./python/07_trees/04_binary_tree_level_order_traversal.py) |
| #235 | [Lowest Common Ancestor of a BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-bst/) | `Medium` | [`src/.../05_lowest_common_ancestor_of_a_bst.ts`](./src/07_trees/05_lowest_common_ancestor_of_a_bst.ts) | [`python/.../05_lowest_common_ancestor_of_a_bst.py`](./python/07_trees/05_lowest_common_ancestor_of_a_bst.py) |

---

## 8. Graphs & Matrix Traversal
| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #200 | [Number of Islands](https://leetcode.com/problems/number-of-islands/) | `Medium` | [`src/.../01_number_of_islands.ts`](./src/08_graphs/01_number_of_islands.ts) | [`python/.../01_number_of_islands.py`](./python/08_graphs/01_number_of_islands.py) |
| #695 | [Max Area of Island](https://leetcode.com/problems/max-area-of-island/) | `Medium` | [`src/.../02_max_area_of_island.ts`](./src/08_graphs/02_max_area_of_island.ts) | [`python/.../02_max_area_of_island.py`](./python/08_graphs/02_max_area_of_island.py) |
| #994 | [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/) | `Medium` | [`src/.../03_rotting_oranges.ts`](./src/08_graphs/03_rotting_oranges.ts) | [`python/.../03_rotting_oranges.py`](./python/08_graphs/03_rotting_oranges.py) |
| #207 | [Course Schedule](https://leetcode.com/problems/course-schedule/) | `Medium` | [`src/.../04_course_schedule.ts`](./src/08_graphs/04_course_schedule.ts) | [`python/.../04_course_schedule.py`](./python/08_graphs/04_course_schedule.py) |

---

## 9. Intervals & Dynamic Programming
| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #56 | [Merge Intervals](https://leetcode.com/problems/merge-intervals/) | `Medium` | [`src/.../01_merge_intervals.ts`](./src/09_intervals_and_dp/01_merge_intervals.ts) | [`python/.../01_merge_intervals.py`](./python/09_intervals_and_dp/01_merge_intervals.py) |
| #57 | [Insert Interval](https://leetcode.com/problems/insert-interval/) | `Medium` | [`src/.../02_insert_interval.ts`](./src/09_intervals_and_dp/02_insert_interval.ts) | [`python/.../02_insert_interval.py`](./python/09_intervals_and_dp/02_insert_interval.py) |
| #70 | [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) | `Easy` | [`src/.../03_climbing_stairs.ts`](./src/09_intervals_and_dp/03_climbing_stairs.ts) | [`python/.../03_climbing_stairs.py`](./python/09_intervals_and_dp/03_climbing_stairs.py) |
| #198 | [House Robber](https://leetcode.com/problems/house-robber/) | `Medium` | [`src/.../04_house_robber.ts`](./src/09_intervals_and_dp/04_house_robber.ts) | [`python/.../04_house_robber.py`](./python/09_intervals_and_dp/04_house_robber.py) |
| #322 | [Coin Change](https://leetcode.com/problems/coin-change/) | `Medium` | [`src/.../05_coin_change.ts`](./src/09_intervals_and_dp/05_coin_change.ts) | [`python/.../05_coin_change.py`](./python/09_intervals_and_dp/05_coin_change.py) |

---

## 10. Tries (Prefix Trees) - *AI Tokenizers* 🤖
> **AI Relevance:** Byte-Pair Encoding (BPE), SentencePiece, token prefix caching, autocomplete.

| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #208 | [Implement Trie](https://leetcode.com/problems/implement-trie-prefix-tree/) | `Medium` | [`src/.../01_implement_trie.ts`](./src/10_tries/01_implement_trie.ts) | [`python/.../01_implement_trie.py`](./python/10_tries/01_implement_trie.py) |
| #211 | [Design Add and Search Words](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | `Medium` | [`src/.../02_design_add_and_search_words.ts`](./src/10_tries/02_design_add_and_search_words.ts) | [`python/.../02_design_add_and_search_words.py`](./python/10_tries/02_design_add_and_search_words.py) |

---

## 11. Heaps & Priority Queues - *Beam Search & Quantiles* 🤖
> **AI Relevance:** Beam search token candidate selection, streaming latency metrics (p50/p99), vector candidate filtering.

| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #215 | [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/) | `Medium` | [`src/.../01_kth_largest_element.ts`](./src/11_heaps_and_priority_queues/01_kth_largest_element.ts) | [`python/.../01_kth_largest_element.py`](./python/11_heaps_and_priority_queues/01_kth_largest_element.py) |
| #295 | [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) | `Hard` | [`src/.../02_find_median_from_data_stream.ts`](./src/11_heaps_and_priority_queues/02_find_median_from_data_stream.ts) | [`python/.../02_find_median_from_data_stream.py`](./python/11_heaps_and_priority_queues/02_find_median_from_data_stream.py) |

---

## 12. Union-Find / DSU - *Clustering & Deduplication* 🤖
> **AI Relevance:** Pretraining dataset deduplication (Common Crawl / FineWeb), entity resolution, embedding cluster merging.

| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #547 | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | `Medium` | [`src/.../01_number_of_provinces.ts`](./src/12_union_find/01_number_of_provinces.ts) | [`python/.../01_number_of_provinces.py`](./python/12_union_find/01_number_of_provinces.py) |
| #721 | [Accounts Merge](https://leetcode.com/problems/accounts-merge/) | `Medium` | [`src/.../02_accounts_merge.ts`](./src/12_union_find/02_accounts_merge.ts) | [`python/.../02_accounts_merge.py`](./python/12_union_find/02_accounts_merge.py) |

---

## 13. Backtracking & State Search - *Tree-of-Thoughts* 🤖
> **AI Relevance:** Reasoning models (o1/o3, DeepSeek R1), Tree-of-Thoughts exploration, constrained grammar decoding.

| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #78 | [Subsets](https://leetcode.com/problems/subsets/) | `Medium` | [`src/.../01_subsets.ts`](./src/13_backtracking/01_subsets.ts) | [`python/.../01_subsets.py`](./python/13_backtracking/01_subsets.py) |
| #79 | [Word Search](https://leetcode.com/problems/word-search/) | `Medium` | [`src/.../02_word_search.ts`](./src/13_backtracking/02_word_search.ts) | [`python/.../02_word_search.py`](./python/13_backtracking/02_word_search.py) |

---

## 14. 2D DP & Alignment - *LLM Evaluation & Metrics* 🤖
> **AI Relevance:** ROUGE-L summarization scoring, Word Error Rate (WER) in Speech models (Whisper), diffing, sequence alignment.

| # | Problem | Difficulty | TypeScript Solution | Python Solution |
|---|---|:---:|---|---|
| #1143 | [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) | `Medium` | [`src/.../01_longest_common_subsequence.ts`](./src/14_2d_dp_and_alignment/01_longest_common_subsequence.ts) | [`python/.../01_longest_common_subsequence.py`](./python/14_2d_dp_and_alignment/01_longest_common_subsequence.py) |
| #72 | [Edit Distance](https://leetcode.com/problems/edit-distance/) | `Medium` | [`src/.../02_edit_distance.ts`](./src/14_2d_dp_and_alignment/02_edit_distance.ts) | [`python/.../02_edit_distance.py`](./python/14_2d_dp_and_alignment/02_edit_distance.py) |

---

## 15. AI System DSA - *LLM Serving Gateways* 🤖
> **AI Relevance:** Production rate limiting for OpenAI/Anthropic APIs handling Requests-Per-Minute (RPM) and Tokens-Per-Minute (TPM).

| Problem | Type | TypeScript Solution | Python Solution |
|---|:---:|---|---|
| [Token Bucket Rate Limiter](./src/15_ai_system_dsa/01_token_bucket_rate_limiter.ts) | `System DSA` | [`src/.../01_token_bucket_rate_limiter.ts`](./src/15_ai_system_dsa/01_token_bucket_rate_limiter.ts) | [`python/.../01_token_bucket_rate_limiter.py`](./python/15_ai_system_dsa/01_token_bucket_rate_limiter.py) |

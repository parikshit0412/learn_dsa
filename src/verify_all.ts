import assert from 'node:assert';

// 01. Arrays & Hashing
import { twoSum } from './01_arrays_and_hashing/01_two_sum.js';
import { groupAnagrams } from './01_arrays_and_hashing/02_group_anagrams.js';
import { topKFrequent } from './01_arrays_and_hashing/03_top_k_frequent_elements.js';
import { productExceptSelf } from './01_arrays_and_hashing/04_product_of_array_except_self.js';
import { longestConsecutive } from './01_arrays_and_hashing/05_longest_consecutive_sequence.js';

// 02. Two Pointers
import { isPalindrome } from './02_two_pointers/01_valid_palindrome.js';
import { threeSum } from './02_two_pointers/02_3sum.js';
import { maxArea } from './02_two_pointers/03_container_with_most_water.js';

// 03. Sliding Window
import { maxProfit } from './03_sliding_window/01_best_time_to_buy_and_sell_stock.js';
import { lengthOfLongestSubstring } from './03_sliding_window/02_longest_substring_without_repeating_characters.js';
import { characterReplacement } from './03_sliding_window/03_longest_repeating_character_replacement.js';

// 04. Stack
import { isValid } from './04_stack/01_valid_parentheses.js';
import { MinStack } from './04_stack/02_min_stack.js';
import { dailyTemperatures } from './04_stack/03_daily_temperatures.js';

// 05. Linked List
import { reverseList } from './05_linked_list/01_reverse_linked_list.js';
import { mergeTwoLists } from './05_linked_list/02_merge_two_sorted_lists.js';
import { hasCycle } from './05_linked_list/03_linked_list_cycle.js';
import { removeNthFromEnd } from './05_linked_list/04_remove_nth_node_from_end_of_list.js';
import { LRUCache } from './05_linked_list/05_lru_cache.js';
import { createLinkedList, linkedListToArray, ListNode } from './common/ListNode.js';

// 06. Binary Search
import { search } from './06_binary_search/01_binary_search.js';
import { searchRotated } from './06_binary_search/02_search_in_rotated_sorted_array.js';
import { findMin } from './06_binary_search/03_find_minimum_in_rotated_sorted_array.js';

// 07. Trees
import { invertTree } from './07_trees/01_invert_binary_tree.js';
import { maxDepth } from './07_trees/02_maximum_depth_of_binary_tree.js';
import { isValidBST } from './07_trees/03_validate_binary_search_tree.js';
import { levelOrder } from './07_trees/04_binary_tree_level_order_traversal.js';
import { lowestCommonAncestor } from './07_trees/05_lowest_common_ancestor_of_a_bst.js';
import { createBinaryTree, binaryTreeToArray, TreeNode } from './common/TreeNode.js';

// 08. Graphs
import { numIslands } from './08_graphs/01_number_of_islands.js';
import { maxAreaOfIsland } from './08_graphs/02_max_area_of_island.js';
import { orangesRotting } from './08_graphs/03_rotting_oranges.js';
import { canFinish } from './08_graphs/04_course_schedule.js';

// 09. DP & Intervals
import { merge } from './09_intervals_and_dp/01_merge_intervals.js';
import { insert } from './09_intervals_and_dp/02_insert_interval.js';
import { climbStairs } from './09_intervals_and_dp/03_climbing_stairs.js';
import { rob } from './09_intervals_and_dp/04_house_robber.js';
import { coinChange } from './09_intervals_and_dp/05_coin_change.js';

// 10. Tries (AI Era)
import { Trie } from './10_tries/01_implement_trie.js';
import { WordDictionary } from './10_tries/02_design_add_and_search_words.js';

// 11. Heaps & Priority Queues (AI Era)
import { findKthLargest } from './11_heaps_and_priority_queues/01_kth_largest_element.js';
import { MedianFinder } from './11_heaps_and_priority_queues/02_find_median_from_data_stream.js';

// 12. Union-Find / DSU (AI Era)
import { findCircleNum } from './12_union_find/01_number_of_provinces.js';
import { accountsMerge } from './12_union_find/02_accounts_merge.js';

// 13. Backtracking (AI Era)
import { subsets } from './13_backtracking/01_subsets.js';
import { exist } from './13_backtracking/02_word_search.js';

// 14. 2D DP & Alignment (AI Era)
import { longestCommonSubsequence } from './14_2d_dp_and_alignment/01_longest_common_subsequence.js';
import { minDistance } from './14_2d_dp_and_alignment/02_edit_distance.js';

// 15. AI System DSA (AI Era)
import { TokenBucketRateLimiter } from './15_ai_system_dsa/01_token_bucket_rate_limiter.js';

console.log('🧪 Starting Verification of All 47 DSA Solutions (36 Foundational + 11 AI-Era)...\n');

// 1. Arrays & Hashing
assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log('✅ #1 Two Sum passed');

const anagramGroups = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
assert.strictEqual(anagramGroups.length, 3);
console.log('✅ #49 Group Anagrams passed');

assert.deepStrictEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2).sort(), [1, 2]);
console.log('✅ #347 Top K Frequent Elements passed');

assert.deepStrictEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
console.log('✅ #238 Product of Array Except Self passed');

assert.strictEqual(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
console.log('✅ #128 Longest Consecutive Sequence passed');

// 2. Two Pointers
assert.strictEqual(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.strictEqual(isPalindrome("race a car"), false);
console.log('✅ #125 Valid Palindrome passed');

assert.deepStrictEqual(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
console.log('✅ #15 3Sum passed');

assert.strictEqual(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
console.log('✅ #11 Container With Most Water passed');

// 3. Sliding Window
assert.strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log('✅ #121 Best Time to Buy and Sell Stock passed');

assert.strictEqual(lengthOfLongestSubstring("abcabcbb"), 3);
console.log('✅ #3 Longest Substring Without Repeating Characters passed');

assert.strictEqual(characterReplacement("ABAB", 2), 4);
console.log('✅ #424 Longest Repeating Character Replacement passed');

// 4. Stack
assert.strictEqual(isValid("()[]{}"), true);
assert.strictEqual(isValid("(]"), false);
console.log('✅ #20 Valid Parentheses passed');

const ms = new MinStack();
ms.push(-2);
ms.push(0);
ms.push(-3);
assert.strictEqual(ms.getMin(), -3);
ms.pop();
assert.strictEqual(ms.top(), 0);
assert.strictEqual(ms.getMin(), -2);
console.log('✅ #155 Min Stack passed');

assert.deepStrictEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
console.log('✅ #739 Daily Temperatures passed');

// 5. Linked List
const rev = reverseList(createLinkedList([1, 2, 3, 4, 5]));
assert.deepStrictEqual(linkedListToArray(rev), [5, 4, 3, 2, 1]);
console.log('✅ #206 Reverse Linked List passed');

const mList = mergeTwoLists(createLinkedList([1, 2, 4]), createLinkedList([1, 3, 4]));
assert.deepStrictEqual(linkedListToArray(mList), [1, 1, 2, 3, 4, 4]);
console.log('✅ #21 Merge Two Sorted Lists passed');

const c1 = new ListNode(1);
const c2 = new ListNode(2);
c1.next = c2;
c2.next = c1;
assert.strictEqual(hasCycle(c1), true);
assert.strictEqual(hasCycle(createLinkedList([1, 2, 3])), false);
console.log('✅ #141 Linked List Cycle passed');

const rem = removeNthFromEnd(createLinkedList([1, 2, 3, 4, 5]), 2);
assert.deepStrictEqual(linkedListToArray(rem), [1, 2, 3, 5]);
console.log('✅ #19 Remove Nth Node From End of List passed');

const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
assert.strictEqual(lru.get(1), 1);
lru.put(3, 3);
assert.strictEqual(lru.get(2), -1);
lru.put(4, 4);
assert.strictEqual(lru.get(1), -1);
assert.strictEqual(lru.get(3), 3);
assert.strictEqual(lru.get(4), 4);
console.log('✅ #146 LRU Cache passed');

// 6. Binary Search
assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 9), 4);
console.log('✅ #704 Binary Search passed');

assert.strictEqual(searchRotated([4, 5, 6, 7, 0, 1, 2], 0), 4);
assert.strictEqual(searchRotated([4, 5, 6, 7, 0, 1, 2], 3), -1);
console.log('✅ #33 Search in Rotated Sorted Array passed');

assert.strictEqual(findMin([3, 4, 5, 1, 2]), 1);
assert.strictEqual(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
console.log('✅ #153 Find Minimum in Rotated Sorted Array passed');

// 7. Trees
const inv = invertTree(createBinaryTree([4, 2, 7, 1, 3, 6, 9]));
assert.deepStrictEqual(binaryTreeToArray(inv), [4, 7, 2, 9, 6, 3, 1]);
console.log('✅ #226 Invert Binary Tree passed');

assert.strictEqual(maxDepth(createBinaryTree([3, 9, 20, null, null, 15, 7])), 3);
console.log('✅ #104 Maximum Depth of Binary Tree passed');

assert.strictEqual(isValidBST(createBinaryTree([2, 1, 3])), true);
assert.strictEqual(isValidBST(createBinaryTree([5, 1, 4, null, null, 3, 6])), false);
console.log('✅ #98 Validate Binary Search Tree passed');

assert.deepStrictEqual(levelOrder(createBinaryTree([3, 9, 20, null, null, 15, 7])), [[3], [9, 20], [15, 7]]);
console.log('✅ #102 Binary Tree Level Order Traversal passed');

const bstTree = createBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
const pNode = new TreeNode(2);
const qNode = new TreeNode(8);
assert.strictEqual(lowestCommonAncestor(bstTree, pNode, qNode)?.val, 6);
console.log('✅ #235 Lowest Common Ancestor of a BST passed');

// 8. Graphs
const gridA = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
assert.strictEqual(numIslands(gridA), 1);
console.log('✅ #200 Number of Islands passed');

const gridB = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
];
assert.strictEqual(maxAreaOfIsland(gridB), 6);
console.log('✅ #695 Max Area of Island passed');

const gridC = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
];
assert.strictEqual(orangesRotting(gridC), 4);
console.log('✅ #994 Rotting Oranges passed');

assert.strictEqual(canFinish(2, [[1, 0]]), true);
assert.strictEqual(canFinish(2, [[1, 0], [0, 1]]), false);
console.log('✅ #207 Course Schedule passed');

// 9. DP & Intervals
assert.deepStrictEqual(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
console.log('✅ #56 Merge Intervals passed');

assert.deepStrictEqual(insert([[1, 3], [6, 9]], [2, 5]), [[1, 5], [6, 9]]);
console.log('✅ #57 Insert Interval passed');

assert.strictEqual(climbStairs(2), 2);
assert.strictEqual(climbStairs(3), 3);
assert.strictEqual(climbStairs(5), 8);
console.log('✅ #70 Climbing Stairs passed');

assert.strictEqual(rob([1, 2, 3, 1]), 4);
assert.strictEqual(rob([2, 7, 9, 3, 1]), 12);
console.log('✅ #198 House Robber passed');

assert.strictEqual(coinChange([1, 2, 5], 11), 3);
assert.strictEqual(coinChange([2], 3), -1);
assert.strictEqual(coinChange([1], 0), 0);
console.log('✅ #322 Coin Change passed');

// 10. Tries
const trie = new Trie();
trie.insert("apple");
assert.strictEqual(trie.search("apple"), true);
assert.strictEqual(trie.search("app"), false);
assert.strictEqual(trie.startsWith("app"), true);
trie.insert("app");
assert.strictEqual(trie.search("app"), true);
console.log('✅ #208 Implement Trie passed');

const wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");
assert.strictEqual(wd.search("pad"), false);
assert.strictEqual(wd.search("bad"), true);
assert.strictEqual(wd.search(".ad"), true);
assert.strictEqual(wd.search("b.."), true);
console.log('✅ #211 Design Add and Search Words passed');

// 11. Heaps & Priority Queues
assert.strictEqual(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5);
assert.strictEqual(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);
console.log('✅ #215 Kth Largest Element passed');

const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
assert.strictEqual(mf.findMedian(), 1.5);
mf.addNum(3);
assert.strictEqual(mf.findMedian(), 2.0);
console.log('✅ #295 Find Median from Data Stream passed');

// 12. Union-Find / DSU
const provMatrix = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
];
assert.strictEqual(findCircleNum(provMatrix), 2);
console.log('✅ #547 Number of Provinces passed');

const accList = [
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"]
];
const mergedAcc = accountsMerge(accList);
assert.strictEqual(mergedAcc.length, 3);
console.log('✅ #721 Accounts Merge passed');

// 13. Backtracking
const subRes = subsets([1, 2, 3]);
assert.strictEqual(subRes.length, 8);
console.log('✅ #78 Subsets passed');

const wsBoard = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
];
assert.strictEqual(exist(wsBoard, "ABCCED"), true);
assert.strictEqual(exist(wsBoard, "SEE"), true);
assert.strictEqual(exist(wsBoard, "ABCB"), false);
console.log('✅ #79 Word Search passed');

// 14. 2D DP & Alignment
assert.strictEqual(longestCommonSubsequence("abcde", "ace"), 3);
assert.strictEqual(longestCommonSubsequence("abc", "def"), 0);
console.log('✅ #1143 Longest Common Subsequence passed');

assert.strictEqual(minDistance("horse", "ros"), 3);
assert.strictEqual(minDistance("intention", "execution"), 5);
console.log('✅ #72 Edit Distance passed');

// 15. AI System DSA
const t0 = 1000;
const limiter = new TokenBucketRateLimiter(5, 2, t0);
assert.strictEqual(limiter.allowRequest(3, t0), true);
assert.strictEqual(limiter.allowRequest(2, t0), true);
assert.strictEqual(limiter.allowRequest(1, t0), false);
assert.strictEqual(limiter.allowRequest(2, t0 + 1000), true);
console.log('✅ Token Bucket Rate Limiter (AI System DSA) passed');

console.log('\n🎉 ALL 47 PROBLEM SOLUTIONS (36 FOUNDATIONAL + 11 AI-ERA) VERIFIED AND PASSED SUCCESSFULLY!');

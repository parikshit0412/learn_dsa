"""
Verification test runner for all 47 Python DSA implementations (36 Foundational + 11 AI-Era).
Mirrors the tests in src/verify_all.ts.
"""
import importlib.util
from pathlib import Path
import sys

BASE_DIR = Path(__file__).resolve().parent
# Add python dir to sys.path so modules can find common
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))


def load_module(rel_path: str):
    module_path = BASE_DIR / rel_path
    spec = importlib.util.spec_from_file_location(module_path.stem, module_path)
    if spec is None or spec.loader is None:
        raise ImportError(f"Cannot load module from {module_path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


# Load common helpers
from common.list_node import ListNode, create_linked_list, linked_list_to_array
from common.tree_node import TreeNode, create_binary_tree, binary_tree_to_array

# Load all 36 foundational modules
m_two_sum = load_module("01_arrays_and_hashing/01_two_sum.py")
m_group_anagrams = load_module("01_arrays_and_hashing/02_group_anagrams.py")
m_top_k = load_module("01_arrays_and_hashing/03_top_k_frequent_elements.py")
m_product_except_self = load_module("01_arrays_and_hashing/04_product_of_array_except_self.py")
m_longest_consecutive = load_module("01_arrays_and_hashing/05_longest_consecutive_sequence.py")

m_valid_palindrome = load_module("02_two_pointers/01_valid_palindrome.py")
m_3sum = load_module("02_two_pointers/02_3sum.py")
m_container = load_module("02_two_pointers/03_container_with_most_water.py")

m_stock = load_module("03_sliding_window/01_best_time_to_buy_and_sell_stock.py")
m_longest_substring = load_module("03_sliding_window/02_longest_substring_without_repeating_characters.py")
m_char_replace = load_module("03_sliding_window/03_longest_repeating_character_replacement.py")

m_valid_parentheses = load_module("04_stack/01_valid_parentheses.py")
m_min_stack = load_module("04_stack/02_min_stack.py")
m_daily_temp = load_module("04_stack/03_daily_temperatures.py")

m_reverse_list = load_module("05_linked_list/01_reverse_linked_list.py")
m_merge_lists = load_module("05_linked_list/02_merge_two_sorted_lists.py")
m_cycle = load_module("05_linked_list/03_linked_list_cycle.py")
m_remove_nth = load_module("05_linked_list/04_remove_nth_node_from_end_of_list.py")
m_lru = load_module("05_linked_list/05_lru_cache.py")

m_binary_search = load_module("06_binary_search/01_binary_search.py")
m_search_rotated = load_module("06_binary_search/02_search_in_rotated_sorted_array.py")
m_find_min = load_module("06_binary_search/03_find_minimum_in_rotated_sorted_array.py")

m_invert_tree = load_module("07_trees/01_invert_binary_tree.py")
m_max_depth = load_module("07_trees/02_maximum_depth_of_binary_tree.py")
m_valid_bst = load_module("07_trees/03_validate_binary_search_tree.py")
m_level_order = load_module("07_trees/04_binary_tree_level_order_traversal.py")
m_lca_bst = load_module("07_trees/05_lowest_common_ancestor_of_a_bst.py")

m_islands = load_module("08_graphs/01_number_of_islands.py")
m_max_area_island = load_module("08_graphs/02_max_area_of_island.py")
m_oranges = load_module("08_graphs/03_rotting_oranges.py")
m_course_schedule = load_module("08_graphs/04_course_schedule.py")

m_merge_intervals = load_module("09_intervals_and_dp/01_merge_intervals.py")
m_insert_interval = load_module("09_intervals_and_dp/02_insert_interval.py")
m_climb_stairs = load_module("09_intervals_and_dp/03_climbing_stairs.py")
m_house_robber = load_module("09_intervals_and_dp/04_house_robber.py")
m_coin_change = load_module("09_intervals_and_dp/05_coin_change.py")

# Load 11 AI-era modules
m_trie = load_module("10_tries/01_implement_trie.py")
m_word_dict = load_module("10_tries/02_design_add_and_search_words.py")

m_kth_largest = load_module("11_heaps_and_priority_queues/01_kth_largest_element.py")
m_median_finder = load_module("11_heaps_and_priority_queues/02_find_median_from_data_stream.py")

m_provinces = load_module("12_union_find/01_number_of_provinces.py")
m_accounts = load_module("12_union_find/02_accounts_merge.py")

m_subsets = load_module("13_backtracking/01_subsets.py")
m_word_search = load_module("13_backtracking/02_word_search.py")

m_lcs = load_module("14_2d_dp_and_alignment/01_longest_common_subsequence.py")
m_edit_dist = load_module("14_2d_dp_and_alignment/02_edit_distance.py")

m_rate_limiter = load_module("15_ai_system_dsa/01_token_bucket_rate_limiter.py")


def run_tests():
    print("🚀 Starting Verification of All 47 Python DSA Solutions (36 Foundational + 11 AI-Era)...\n")

    # 1. Arrays & Hashing
    assert m_two_sum.two_sum([2, 7, 11, 15], 9) == [0, 1]
    print("✓ #1 Two Sum passed")

    anagram_groups = m_group_anagrams.group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    assert len(anagram_groups) == 3
    print("✓ #49 Group Anagrams passed")

    assert sorted(m_top_k.top_k_frequent([1, 1, 1, 2, 2, 3], 2)) == [1, 2]
    print("✓ #347 Top K Frequent Elements passed")

    assert m_product_except_self.product_except_self([1, 2, 3, 4]) == [24, 12, 8, 6]
    print("✓ #238 Product of Array Except Self passed")

    assert m_longest_consecutive.longest_consecutive([100, 4, 200, 1, 3, 2]) == 4
    print("✓ #128 Longest Consecutive Sequence passed")

    # 2. Two Pointers
    assert m_valid_palindrome.is_palindrome("A man, a plan, a canal: Panama") is True
    assert m_valid_palindrome.is_palindrome("race a car") is False
    print("✓ #125 Valid Palindrome passed")

    assert m_3sum.three_sum([-1, 0, 1, 2, -1, -4]) == [[-1, -1, 2], [-1, 0, 1]]
    print("✓ #15 3Sum passed")

    assert m_container.max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49
    print("✓ #11 Container With Most Water passed")

    # 3. Sliding Window
    assert m_stock.max_profit([7, 1, 5, 3, 6, 4]) == 5
    print("✓ #121 Best Time to Buy and Sell Stock passed")

    assert m_longest_substring.length_of_longest_substring("abcabcbb") == 3
    print("✓ #3 Longest Substring Without Repeating Characters passed")

    assert m_char_replace.character_replacement("ABAB", 2) == 4
    print("✓ #424 Longest Repeating Character Replacement passed")

    # 4. Stack
    assert m_valid_parentheses.is_valid("()[]{}") is True
    assert m_valid_parentheses.is_valid("(]") is False
    print("✓ #20 Valid Parentheses passed")

    ms = m_min_stack.MinStack()
    ms.push(-2)
    ms.push(0)
    ms.push(-3)
    assert ms.get_min() == -3
    ms.pop()
    assert ms.top() == 0
    assert ms.get_min() == -2
    print("✓ #155 Min Stack passed")

    assert m_daily_temp.daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]) == [1, 1, 4, 2, 1, 1, 0, 0]
    print("✓ #739 Daily Temperatures passed")

    # 5. Linked List
    rev = m_reverse_list.reverse_list(create_linked_list([1, 2, 3, 4, 5]))
    assert linked_list_to_array(rev) == [5, 4, 3, 2, 1]
    print("✓ #206 Reverse Linked List passed")

    m_list = m_merge_lists.merge_two_lists(create_linked_list([1, 2, 4]), create_linked_list([1, 3, 4]))
    assert linked_list_to_array(m_list) == [1, 1, 2, 3, 4, 4]
    print("✓ #21 Merge Two Sorted Lists passed")

    c1 = ListNode(1)
    c2 = ListNode(2)
    c1.next = c2
    c2.next = c1
    assert m_cycle.has_cycle(c1) is True
    assert m_cycle.has_cycle(create_linked_list([1, 2, 3])) is False
    print("✓ #141 Linked List Cycle passed")

    rem = m_remove_nth.remove_nth_from_end(create_linked_list([1, 2, 3, 4, 5]), 2)
    assert linked_list_to_array(rem) == [1, 2, 3, 5]
    print("✓ #19 Remove Nth Node From End of List passed")

    lru = m_lru.LRUCache(2)
    lru.put(1, 1)
    lru.put(2, 2)
    assert lru.get(1) == 1
    lru.put(3, 3)
    assert lru.get(2) == -1
    lru.put(4, 4)
    assert lru.get(1) == -1
    assert lru.get(3) == 3
    assert lru.get(4) == 4
    print("✓ #146 LRU Cache passed")

    # 6. Binary Search
    assert m_binary_search.search([-1, 0, 3, 5, 9, 12], 9) == 4
    print("✓ #704 Binary Search passed")

    assert m_search_rotated.search_rotated([4, 5, 6, 7, 0, 1, 2], 0) == 4
    assert m_search_rotated.search_rotated([4, 5, 6, 7, 0, 1, 2], 3) == -1
    print("✓ #33 Search in Rotated Sorted Array passed")

    assert m_find_min.find_min([3, 4, 5, 1, 2]) == 1
    assert m_find_min.find_min([4, 5, 6, 7, 0, 1, 2]) == 0
    print("✓ #153 Find Minimum in Rotated Sorted Array passed")

    # 7. Trees
    inv = m_invert_tree.invert_tree(create_binary_tree([4, 2, 7, 1, 3, 6, 9]))
    assert binary_tree_to_array(inv) == [4, 7, 2, 9, 6, 3, 1]
    print("✓ #226 Invert Binary Tree passed")

    assert m_max_depth.max_depth(create_binary_tree([3, 9, 20, None, None, 15, 7])) == 3
    print("✓ #104 Maximum Depth of Binary Tree passed")

    assert m_valid_bst.is_valid_bst(create_binary_tree([2, 1, 3])) is True
    assert m_valid_bst.is_valid_bst(create_binary_tree([5, 1, 4, None, None, 3, 6])) is False
    print("✓ #98 Validate Binary Search Tree passed")

    assert m_level_order.level_order(create_binary_tree([3, 9, 20, None, None, 15, 7])) == [[3], [9, 20], [15, 7]]
    print("✓ #102 Binary Tree Level Order Traversal passed")

    bst_tree = create_binary_tree([6, 2, 8, 0, 4, 7, 9, None, None, 3, 5])
    p_node = TreeNode(2)
    q_node = TreeNode(8)
    lca_res = m_lca_bst.lowest_common_ancestor(bst_tree, p_node, q_node)
    assert lca_res is not None and lca_res.val == 6
    print("✓ #235 Lowest Common Ancestor of a BST passed")

    # 8. Graphs
    grid_a = [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ]
    assert m_islands.num_islands(grid_a) == 1
    print("✓ #200 Number of Islands passed")

    grid_b = [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ]
    assert m_max_area_island.max_area_of_island(grid_b) == 6
    print("✓ #695 Max Area of Island passed")

    grid_c = [
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
    ]
    assert m_oranges.oranges_rotting(grid_c) == 4
    print("✓ #994 Rotting Oranges passed")

    assert m_course_schedule.can_finish(2, [[1, 0]]) is True
    assert m_course_schedule.can_finish(2, [[1, 0], [0, 1]]) is False
    print("✓ #207 Course Schedule passed")

    # 9. DP & Intervals
    assert m_merge_intervals.merge([[1, 3], [2, 6], [8, 10], [15, 18]]) == [[1, 6], [8, 10], [15, 18]]
    print("✓ #56 Merge Intervals passed")

    assert m_insert_interval.insert([[1, 3], [6, 9]], [2, 5]) == [[1, 5], [6, 9]]
    print("✓ #57 Insert Interval passed")

    assert m_climb_stairs.climb_stairs(2) == 2
    assert m_climb_stairs.climb_stairs(3) == 3
    assert m_climb_stairs.climb_stairs(5) == 8
    print("✓ #70 Climbing Stairs passed")

    assert m_house_robber.rob([1, 2, 3, 1]) == 4
    assert m_house_robber.rob([2, 7, 9, 3, 1]) == 12
    print("✓ #198 House Robber passed")

    assert m_coin_change.coin_change([1, 2, 5], 11) == 3
    assert m_coin_change.coin_change([2], 3) == -1
    assert m_coin_change.coin_change([1], 0) == 0
    print("✓ #322 Coin Change passed")

    # 10. Tries
    trie = m_trie.Trie()
    trie.insert("apple")
    assert trie.search("apple") is True
    assert trie.search("app") is False
    assert trie.starts_with("app") is True
    trie.insert("app")
    assert trie.search("app") is True
    print("✓ #208 Implement Trie passed")

    wd = m_word_dict.WordDictionary()
    wd.add_word("bad")
    wd.add_word("dad")
    wd.add_word("mad")
    assert wd.search("pad") is False
    assert wd.search("bad") is True
    assert wd.search(".ad") is True
    assert wd.search("b..") is True
    print("✓ #211 Design Add and Search Words passed")

    # 11. Heaps & Priority Queues
    assert m_kth_largest.find_kth_largest([3, 2, 1, 5, 6, 4], 2) == 5
    assert m_kth_largest.find_kth_largest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4) == 4
    print("✓ #215 Kth Largest Element passed")

    mf = m_median_finder.MedianFinder()
    mf.add_num(1)
    mf.add_num(2)
    assert mf.find_median() == 1.5
    mf.add_num(3)
    assert mf.find_median() == 2.0
    print("✓ #295 Find Median from Data Stream passed")

    # 12. Union-Find / DSU
    prov_matrix = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ]
    assert m_provinces.find_circle_num(prov_matrix) == 2
    print("✓ #547 Number of Provinces passed")

    acc_list = [
        ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
        ["John", "johnsmith@mail.com", "john00@mail.com"],
        ["Mary", "mary@mail.com"],
        ["John", "johnnybravo@mail.com"],
    ]
    merged_acc = m_accounts.accounts_merge(acc_list)
    assert len(merged_acc) == 3
    print("✓ #721 Accounts Merge passed")

    # 13. Backtracking
    sub_res = m_subsets.subsets([1, 2, 3])
    assert len(sub_res) == 8
    print("✓ #78 Subsets passed")

    ws_board = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
    ]
    assert m_word_search.exist(ws_board, "ABCCED") is True
    assert m_word_search.exist(ws_board, "SEE") is True
    assert m_word_search.exist(ws_board, "ABCB") is False
    print("✓ #79 Word Search passed")

    # 14. 2D DP & Alignment
    assert m_lcs.longest_common_subsequence("abcde", "ace") == 3
    assert m_lcs.longest_common_subsequence("abc", "def") == 0
    print("✓ #1143 Longest Common Subsequence passed")

    assert m_edit_dist.min_distance("horse", "ros") == 3
    assert m_edit_dist.min_distance("intention", "execution") == 5
    print("✓ #72 Edit Distance passed")

    # 15. AI System DSA
    t0 = 1000.0
    limiter = m_rate_limiter.TokenBucketRateLimiter(5, 2, initial_time=t0)
    assert limiter.allow_request(3, t0) is True
    assert limiter.allow_request(2, t0) is True
    assert limiter.allow_request(1, t0) is False
    assert limiter.allow_request(2, t0 + 1.0) is True
    print("✓ Token Bucket Rate Limiter (AI System DSA) passed")

    print("\n🎉 ALL 47 PYTHON DSA SOLUTIONS (36 FOUNDATIONAL + 11 AI-ERA) VERIFIED AND PASSED SUCCESSFULLY!")


if __name__ == "__main__":
    run_tests()

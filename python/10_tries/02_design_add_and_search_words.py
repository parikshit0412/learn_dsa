"""
Problem: #211 - Design Add and Search Words Data Structure (Medium)
LeetCode Link: https://leetcode.com/problems/design-add-and-search-words-data-structure/
AI Relevance: Fuzzy matching, regex-guided constrained decoding, and wildcard token search.

Design a data structure that supports adding new words and finding if a string matches any previously added string.
Implement WordDictionary:
- `add_word(word)`: Adds word to data structure.
- `search(word)`: Returns true if word matches, where '.' matches any letter.

Time Complexity: O(m) for add_word; O(26^d * m) for search with d dots.
Space Complexity: O(N * m) for trie nodes.
"""
from typing import Dict


class WordNode:
    """Trie Node for WordDictionary."""

    def __init__(self):
        self.children: Dict[str, "WordNode"] = {}
        self.is_end_of_word: bool = False


class WordDictionary:
    """Trie with wildcard '.' search support."""

    def __init__(self):
        self.root = WordNode()

    def add_word(self, word: str) -> None:
        """Adds a word into the data structure."""
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = WordNode()
            curr = curr.children[char]
        curr.is_end_of_word = True

    def search(self, word: str) -> bool:
        """Returns True if word is in structure, '.' matches any character."""
        def dfs(node: WordNode, index: int) -> bool:
            if index == len(word):
                return node.is_end_of_word

            char = word[index]
            if char == ".":
                for child in node.children.values():
                    if dfs(child, index + 1):
                        return True
                return False

            if char not in node.children:
                return False

            return dfs(node.children[char], index + 1)

        return dfs(self.root, 0)

    # Alias for camelCase
    addWord = add_word


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    dict_obj = WordDictionary()
    dict_obj.add_word("bad")
    dict_obj.add_word("dad")
    dict_obj.add_word("mad")
    print('Search "pad":', dict_obj.search("pad"))  # Expected: False
    print('Search "bad":', dict_obj.search("bad"))  # Expected: True
    print('Search ".ad":', dict_obj.search(".ad"))  # Expected: True
    print('Search "b..":', dict_obj.search("b.."))  # Expected: True

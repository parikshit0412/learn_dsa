"""
Problem: #208 - Implement Trie (Prefix Tree) (Medium)
LeetCode Link: https://leetcode.com/problems/implement-trie-prefix-tree/
AI Relevance: Core data structure behind LLM Tokenizers (Byte-Pair Encoding / WordPiece),
              prompt prefix caching (vLLM / SGLang), and fast autocomplete.

Implement the Trie class:
- `insert(word)`: Inserts string word into trie.
- `search(word)`: Returns true if word is in trie.
- `startsWith(prefix)`: Returns true if any inserted word starts with prefix.

Time Complexity: O(m) for all operations where m is length of word/prefix.
Space Complexity: O(N * m) where N is number of words, m is average length.
"""
from typing import Dict


class TrieNode:
    """Node in a Prefix Tree."""

    def __init__(self):
        self.children: Dict[str, "TrieNode"] = {}
        self.is_end_of_word: bool = False


class Trie:
    """Prefix Tree (Trie) Implementation."""

    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        """Inserts word into trie."""
        curr = self.root
        for char in word:
            if char not in curr.children:
                curr.children[char] = TrieNode()
            curr = curr.children[char]
        curr.is_end_of_word = True

    def search(self, word: str) -> bool:
        """Returns True if word is in trie."""
        curr = self.root
        for char in word:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        return curr.is_end_of_word

    def starts_with(self, prefix: str) -> bool:
        """Returns True if any word starts with prefix."""
        curr = self.root
        for char in prefix:
            if char not in curr.children:
                return False
            curr = curr.children[char]
        return True

    # Alias for camelCase
    startsWith = starts_with


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    trie = Trie()
    trie.insert("apple")
    print('Search "apple":', trie.search("apple"))          # Expected: True
    print('Search "app":', trie.search("app"))              # Expected: False
    print('StartsWith "app":', trie.starts_with("app"))     # Expected: True
    trie.insert("app")
    print('Search "app" after insert:', trie.search("app")) # Expected: True


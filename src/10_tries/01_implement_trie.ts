/**
 * Problem: #208 - Implement Trie (Prefix Tree) (Medium)
 * LeetCode Link: https://leetcode.com/problems/implement-trie-prefix-tree/
 * AI Relevance: Core data structure behind LLM Tokenizers (Byte-Pair Encoding / WordPiece),
 *               prompt prefix caching (vLLM / SGLang), and fast autocomplete.
 * 
 * Implement the Trie class:
 * - `Trie()` Initializes the trie object.
 * - `void insert(String word)` Inserts the string `word` into the trie.
 * - `boolean search(String word)` Returns true if the string `word` is in the trie.
 * - `boolean startsWith(String prefix)` Returns true if there is a previously inserted string that has the prefix.
 * 
 * Time Complexity:
 * - `insert`: O(m) where m is length of the key
 * - `search`: O(m)
 * - `startsWith`: O(m)
 * Space Complexity: O(N * m) where N is number of keys and m is average key length.
 */

export class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEndOfWord = false;
  }
}

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   */
  insert(word: string): void {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode());
      }
      curr = curr.children.get(char)!;
    }
    curr.isEndOfWord = true;
  }

  /**
   * Returns true if the word is in the trie.
   */
  search(word: string): boolean {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.children.has(char)) {
        return false;
      }
      curr = curr.children.get(char)!;
    }
    return curr.isEndOfWord;
  }

  /**
   * Returns true if there is any word in the trie that starts with the given prefix.
   */
  startsWith(prefix: string): boolean {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!curr.children.has(char)) {
        return false;
      }
      curr = curr.children.get(char)!;
    }
    return true;
  }
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const trie = new Trie();
  trie.insert("apple");
  console.log('Search "apple":', trie.search("apple"));     // Expected: true
  console.log('Search "app":', trie.search("app"));         // Expected: false
  console.log('StartsWith "app":', trie.startsWith("app")); // Expected: true
  trie.insert("app");
  console.log('Search "app" after insert:', trie.search("app")); // Expected: true
}


/**
 * Problem: #211 - Design Add and Search Words Data Structure (Medium)
 * LeetCode Link: https://leetcode.com/problems/design-add-and-search-words-data-structure/
 * AI Relevance: Fuzzy matching, regex-guided constrained decoding, and wildcard token search.
 * 
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 * Implement WordDictionary:
 * - `void addWord(word)`: Adds word to data structure.
 * - `bool search(word)`: Returns true if word matches any string in data structure.
 *   A word may contain dots `.` where dots can match any letter.
 * 
 * Time Complexity:
 * - `addWord`: O(m) where m is word length
 * - `search`: O(m) for words without dots; O(26^d * m) worst-case with d dots.
 * Space Complexity: O(N * m) for trie nodes.
 */

class WordDictionaryNode {
  children: Map<string, WordDictionaryNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map<string, WordDictionaryNode>();
    this.isEndOfWord = false;
  }
}

export class WordDictionary {
  root: WordDictionaryNode;

  constructor() {
    this.root = new WordDictionaryNode();
  }

  addWord(word: string): void {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.children.has(char)) {
        curr.children.set(char, new WordDictionaryNode());
      }
      curr = curr.children.get(char)!;
    }
    curr.isEndOfWord = true;
  }

  search(word: string): boolean {
    function dfs(node: WordDictionaryNode, index: number): boolean {
      if (index === word.length) {
        return node.isEndOfWord;
      }

      const char = word[index];

      // If character is wildcard '.', try all child branches
      if (char === '.') {
        for (const childNode of node.children.values()) {
          if (dfs(childNode, index + 1)) {
            return true;
          }
        }
        return false;
      }

      // Exact character matching
      if (!node.children.has(char)) {
        return false;
      }

      return dfs(node.children.get(char)!, index + 1);
    }

    return dfs(this.root, 0);
  }
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const dict = new WordDictionary();
  dict.addWord("bad");
  dict.addWord("dad");
  dict.addWord("mad");
  console.log('Search "pad":', dict.search("pad")); // Expected: false
  console.log('Search "bad":', dict.search("bad")); // Expected: true
  console.log('Search ".ad":', dict.search(".ad")); // Expected: true
  console.log('Search "b..":', dict.search("b..")); // Expected: true
}


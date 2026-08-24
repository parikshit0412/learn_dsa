/**
 * Problem: #49 - Group Anagrams (Medium)
 * LeetCode Link: https://leetcode.com/problems/group-anagrams/
 * 
 * Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word formed by rearranging the letters of a different word, typically using all the original letters exactly once.
 * 
 * Time Complexity: O(n * k * log(k)) where n is number of strings, k is max length of a string (sorting method),
 *                  or O(n * k) using character frequency count tuples.
 * Space Complexity: O(n * k) to store strings in map buckets.
 */

export function groupAnagrams(strs: string[]): string[][] {
  // Map where key is the sorted character signature (canonical form),
  // and value is an array of strings that share this signature.
  const map = new Map<string, string[]>();

  // Iterate over every string in the input list
  for (let i = 0; i < strs.length; i++) {
    const s = strs[i];

    // Convert string to array of characters, sort alphabetically, and join back into a string
    // Anagrams will always produce the exact same sorted string key
    const sortedKey = s.split('').sort().join('');

    // If key does not exist yet in map, initialize an empty bucket
    if (!map.has(sortedKey)) {
      map.set(sortedKey, []);
    }

    // Push the original string into its corresponding anagram bucket
    map.get(sortedKey)!.push(s);
  }

  // Convert the map's values (all anagram groups) into an array of arrays
  return Array.from(map.values());
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  console.log('Group Anagrams Result:', groupAnagrams(strs));
  // Expected: [["eat","tea","ate"], ["tan","nat"], ["bat"]] (order can vary)
}

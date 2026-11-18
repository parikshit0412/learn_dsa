/**
 * Problem: #215 - Kth Largest Element in an Array (Medium)
 * LeetCode Link: https://leetcode.com/problems/kth-largest-element-in-an-array/
 * AI Relevance: Core primitive in LLM top-k token filtering, beam search candidate pruning,
 *               and retrieval scoring over vector similarity results.
 * 
 * Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.
 * Note that it is the `k`th largest element in the sorted order, not the `k`th distinct element.
 * Can you solve it without sorting?
 * 
 * Strategy: Min-Heap of size k (or QuickSelect)
 * - Maintain a Min-Heap of size k.
 * - For each number:
 *   - Push into heap.
 *   - If heap size exceeds k, pop the smallest element.
 * - After processing all elements, the heap top holds the kth largest element.
 * 
 * Time Complexity: O(n log k) - Maintaining heap of size k across n elements.
 * Space Complexity: O(k) - Storage for the heap.
 */

export class MinHeap {
  private data: number[];

  constructor() {
    this.data = [];
  }

  size(): number {
    return this.data.length;
  }

  peek(): number | undefined {
    return this.data[0];
  }

  push(val: number): void {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): number | undefined {
    if (this.data.length === 0) return undefined;
    const top = this.data[0];
    const bottom = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = bottom;
      this.bubbleDown(0);
    }
    return top;
  }

  private bubbleUp(idx: number): void {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.data[idx] < this.data[parentIdx]) {
        [this.data[idx], this.data[parentIdx]] = [this.data[parentIdx], this.data[idx]];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  private bubbleDown(idx: number): void {
    const length = this.data.length;
    while (true) {
      let smallest = idx;
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;

      if (left < length && this.data[left] < this.data[smallest]) {
        smallest = left;
      }
      if (right < length && this.data[right] < this.data[smallest]) {
        smallest = right;
      }

      if (smallest !== idx) {
        [this.data[idx], this.data[smallest]] = [this.data[smallest], this.data[idx]];
        idx = smallest;
      } else {
        break;
      }
    }
  }
}

export function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.push(nums[i]);
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }

  return minHeap.peek()!;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  console.log('Kth Largest ([3,2,1,5,6,4], k=2):', findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Expected: 5
  console.log('Kth Largest ([3,2,3,1,2,4,5,5,6], k=4):', findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Expected: 4
}


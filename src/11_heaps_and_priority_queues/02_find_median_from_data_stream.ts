/**
 * Problem: #295 - Find Median from Data Stream (Hard)
 * LeetCode Link: https://leetcode.com/problems/find-median-from-data-stream/
 * AI Relevance: Real-time latency tracking (p50 / median response time in streaming LLM APIs),
 *               online quantiles, and rolling percentile normalization.
 * 
 * Design a data structure that supports:
 * - `void addNum(int num)`: Adds an integer from data stream.
 * - `double findMedian()`: Returns median of all elements so far.
 * 
 * Strategy: Two Heaps (Max-Heap + Min-Heap)
 * - `maxHeap` (lower half): stores the smaller half of numbers (inverted MinHeap).
 * - `minHeap` (upper half): stores the larger half of numbers.
 * - Invariant:
 *   1. Every element in `maxHeap` <= every element in `minHeap`.
 *   2. Sizes are balanced: `maxHeap.size() == minHeap.size()` or `maxHeap.size() == minHeap.size() + 1`.
 * 
 * Time Complexity:
 * - `addNum`: O(log n)
 * - `findMedian`: O(1)
 * Space Complexity: O(n)
 */

class GenericHeap {
  private data: number[];
  private compare: (a: number, b: number) => boolean;

  constructor(compare: (a: number, b: number) => boolean) {
    this.data = [];
    this.compare = compare; // Returns true if a has higher priority than b
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
      if (this.compare(this.data[idx], this.data[parentIdx])) {
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
      let candidate = idx;
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;

      if (left < length && this.compare(this.data[left], this.data[candidate])) {
        candidate = left;
      }
      if (right < length && this.compare(this.data[right], this.data[candidate])) {
        candidate = right;
      }

      if (candidate !== idx) {
        [this.data[idx], this.data[candidate]] = [this.data[candidate], this.data[idx]];
        idx = candidate;
      } else {
        break;
      }
    }
  }
}

export class MedianFinder {
  private maxHeap: GenericHeap; // Stores smaller half
  private minHeap: GenericHeap; // Stores larger half

  constructor() {
    this.maxHeap = new GenericHeap((a, b) => a > b); // Max-heap
    this.minHeap = new GenericHeap((a, b) => a < b); // Min-heap
  }

  addNum(num: number): void {
    // 1. Push to maxHeap first
    this.maxHeap.push(num);

    // 2. Ensure every element in maxHeap <= minHeap
    if (
      this.maxHeap.size() > 0 &&
      this.minHeap.size() > 0 &&
      this.maxHeap.peek()! > this.minHeap.peek()!
    ) {
      this.minHeap.push(this.maxHeap.pop()!);
    }

    // 3. Balance sizes (maxHeap can have at most 1 more element than minHeap)
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.push(this.maxHeap.pop()!);
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.push(this.minHeap.pop()!);
    }
  }

  findMedian(): number {
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek()!;
    }
    return (this.maxHeap.peek()! + this.minHeap.peek()!) / 2;
  }
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const mf = new MedianFinder();
  mf.addNum(1);
  mf.addNum(2);
  console.log('Median after [1, 2]:', mf.findMedian()); // Expected: 1.5
  mf.addNum(3);
  console.log('Median after [1, 2, 3]:', mf.findMedian()); // Expected: 2.0
}


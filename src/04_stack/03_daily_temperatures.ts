/**
 * Problem: #739 - Daily Temperatures (Medium)
 * LeetCode Link: https://leetcode.com/problems/daily-temperatures/
 * 
 * Given an array of integers `temperatures` represents the daily temperatures, return an array `answer`
 * such that `answer[i]` is the number of days you have to wait after the `i-th` day to get a warmer temperature.
 * If there is no future day for which this is possible, keep `answer[i] == 0` instead.
 * 
 * Strategy: Monotonic Decreasing Stack
 * - We maintain a stack of INDICES whose temperatures are in decreasing order.
 * - For each day `i`, while `temperatures[i] > temperatures[stack.top()]`:
 *   We have found a warmer day for `stack.top()`!
 *   Pop `prevIndex` from stack and record difference `i - prevIndex` in `answer[prevIndex]`.
 * - Push current index `i` onto the stack.
 * 
 * Time Complexity: O(n) - Each index is pushed and popped at most once.
 * Space Complexity: O(n) - Stack stores at most n indices in descending order.
 */

export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  // Initialize result array with 0s (default if no warmer day exists)
  const answer: number[] = new Array(n).fill(0);

  // Stack storing indices of days with unresolved warmer temperatures
  const stack: number[] = [];

  // Traverse through each day's temperature
  for (let i = 0; i < n; i++) {
    const currentTemp = temperatures[i];

    // While stack is not empty and current temperature is warmer than temperature at stack top index
    while (stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]) {
      // Pop the previous day's index from stack
      const prevIndex = stack.pop()!;

      // The number of days waited is current index minus previous index
      answer[prevIndex] = i - prevIndex;
    }

    // Push current day's index onto the stack
    stack.push(i);
  }

  return answer;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const temps1 = [73, 74, 75, 71, 69, 72, 76, 73];
  console.log('Daily Temperatures (Test 1):', dailyTemperatures(temps1));
  // Expected: [1, 1, 4, 2, 1, 1, 0, 0]

  const temps2 = [30, 40, 50, 60];
  console.log('Daily Temperatures (Test 2):', dailyTemperatures(temps2));
  // Expected: [1, 1, 1, 0]
}

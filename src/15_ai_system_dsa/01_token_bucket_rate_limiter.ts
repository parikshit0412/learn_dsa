/**
 * System DSA: Token Bucket Rate Limiter
 * Common Interview Context: OpenAI, Anthropic, Stripe, AWS, Cloudflare
 * AI Relevance: Every LLM API enforces Requests-Per-Minute (RPM) and Tokens-Per-Minute (TPM)
 *               rate limits using the Token Bucket or Leaky Bucket algorithm.
 * 
 * Concept:
 * - A bucket has a maximum `capacity` of tokens.
 * - Tokens are continuously added to the bucket at a constant `refillRate` (tokens per second).
 * - When an API request arrives requesting `tokensRequested`:
 *   - Lazily recalculate how many tokens have accumulated since `lastRefillTimestamp`.
 *   - If available tokens >= tokensRequested: consume tokens and return `true` (request allowed).
 *   - Otherwise, reject or throttle request and return `false`.
 * 
 * Time Complexity: O(1) per rate limit check (lazy computation avoids background timers).
 * Space Complexity: O(1) per user / client bucket.
 */

export class TokenBucketRateLimiter {
  private capacity: number;
  private refillRate: number; // Tokens added per millisecond
  private currentTokens: number;
  private lastRefillTimestamp: number;

  /**
   * @param capacity Maximum tokens the bucket can hold (burst capacity)
   * @param refillRatePerSecond Number of tokens replenished per second
   * @param initialTime Optional starting timestamp in milliseconds (defaults to Date.now())
   */
  constructor(capacity: number, refillRatePerSecond: number, initialTime: number = Date.now()) {
    this.capacity = capacity;
    this.refillRate = refillRatePerSecond / 1000; // Convert to tokens per ms
    this.currentTokens = capacity;
    this.lastRefillTimestamp = initialTime;
  }

  /**
   * Refills the bucket based on time elapsed since last check.
   */
  private refill(currentTime: number): void {
    const elapsedMs = Math.max(0, currentTime - this.lastRefillTimestamp);
    const tokensToAdd = elapsedMs * this.refillRate;

    this.currentTokens = Math.min(this.capacity, this.currentTokens + tokensToAdd);
    this.lastRefillTimestamp = currentTime;
  }

  /**
   * Attempts to consume `tokens` from the bucket.
   * @returns true if permitted, false if rate limited
   */
  allowRequest(tokens: number = 1, currentTime: number = Date.now()): boolean {
    this.refill(currentTime);

    if (this.currentTokens >= tokens) {
      this.currentTokens -= tokens;
      return true;
    }

    return false;
  }

  getTokens(): number {
    return this.currentTokens;
  }
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  // Capacity = 5 tokens, Refill = 2 tokens/sec
  const t0 = 1000;
  const limiter = new TokenBucketRateLimiter(5, 2, t0);

  console.log('Consume 3 tokens at t=0:', limiter.allowRequest(3, t0)); // Expected: true (2 remain)
  console.log('Consume 2 tokens at t=0:', limiter.allowRequest(2, t0)); // Expected: true (0 remain)
  console.log('Consume 1 token at t=0:', limiter.allowRequest(1, t0));  // Expected: false (throttled!)

  // 1 second later (refilled 2 tokens)
  console.log('Consume 2 tokens after 1000ms:', limiter.allowRequest(2, t0 + 1000)); // Expected: true
}

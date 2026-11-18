"""
System DSA: Token Bucket Rate Limiter
Common Interview Context: OpenAI, Anthropic, Stripe, AWS, Cloudflare
AI Relevance: Every LLM API enforces Requests-Per-Minute (RPM) and Tokens-Per-Minute (TPM)
              rate limits using the Token Bucket or Leaky Bucket algorithm.

Concept:
- Bucket has maximum capacity.
- Tokens added at constant refill_rate per second.
- Requests lazily compute accrued tokens using time delta.

Time Complexity: O(1) per check
Space Complexity: O(1) per bucket
"""
import time
from typing import Optional


class TokenBucketRateLimiter:
    """Lazy evaluation token bucket rate limiter."""

    def __init__(
        self,
        capacity: float,
        refill_rate_per_sec: float,
        initial_time: Optional[float] = None,
    ):
        self.capacity = float(capacity)
        self.refill_rate = float(refill_rate_per_sec)
        self.current_tokens = float(capacity)
        self.last_refill_timestamp = (
            initial_time if initial_time is not None else time.time()
        )

    def _refill(self, current_time: float) -> None:
        elapsed = max(0.0, current_time - self.last_refill_timestamp)
        tokens_to_add = elapsed * self.refill_rate
        self.current_tokens = min(self.capacity, self.current_tokens + tokens_to_add)
        self.last_refill_timestamp = current_time

    def allow_request(
        self, tokens: float = 1.0, current_time: Optional[float] = None
    ) -> bool:
        """
        Determines whether `tokens` can be consumed at `current_time`.
        """
        if current_time is None:
            current_time = time.time()

        self._refill(current_time)

        if self.current_tokens >= tokens:
            self.current_tokens -= tokens
            return True

        return False

    # Alias for camelCase
    allowRequest = allow_request


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    t0 = 1000.0
    limiter = TokenBucketRateLimiter(capacity=5, refill_rate_per_sec=2, initial_time=t0)

    print("Consume 3 tokens at t=0:", limiter.allow_request(3, t0))        # Expected: True (2 left)
    print("Consume 2 tokens at t=0:", limiter.allow_request(2, t0))        # Expected: True (0 left)
    print("Consume 1 token at t=0:", limiter.allow_request(1, t0))         # Expected: False (throttled)
    print("Consume 2 tokens after 1s:", limiter.allow_request(2, t0 + 1.0))# Expected: True

"""
Problem: #721 - Accounts Merge (Medium)
LeetCode Link: https://leetcode.com/problems/accounts-merge/
AI Relevance: Entity resolution, deduplication of web datasets (Common Crawl / FineWeb),
              and identity linking in knowledge graphs.

Given a list of accounts where `accounts[i]` has a name followed by emails:
If two accounts have an email in common, merge them. Return name with sorted emails.

Time Complexity: O(A * k * log(A * k))
Space Complexity: O(A * k)
"""
from collections import defaultdict
from typing import List, Dict, Set


class DSU:
    """Disjoint Set Union by index."""

    def __init__(self, n: int):
        self.parent = list(range(n))

    def find(self, x: int) -> int:
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x: int, y: int) -> None:
        rx = self.find(x)
        ry = self.find(y)
        if rx != ry:
            self.parent[rx] = ry


def accounts_merge(accounts: List[List[str]]) -> List[List[str]]:
    """
    Merges duplicate accounts using Union-Find.
    """
    n = len(accounts)
    dsu = DSU(n)
    email_to_idx: Dict[str, int] = {}

    # Step 1: Connect accounts sharing emails
    for i, acc in enumerate(accounts):
        for email in acc[1:]:
            if email in email_to_idx:
                dsu.union(i, email_to_idx[email])
            else:
                email_to_idx[email] = i

    # Step 2: Group emails under root account
    root_to_emails: Dict[int, Set[str]] = defaultdict(set)
    for email, idx in email_to_idx.items():
        root = dsu.find(idx)
        root_to_emails[root].add(email)

    # Step 3: Format output
    result: List[List[str]] = []
    for root_idx, emails in root_to_emails.items():
        name = accounts[root_idx][0]
        result.append([name] + sorted(emails))

    return result


# Alias for camelCase
accountsMerge = accounts_merge


# --- Example Test Cases / Self Run ---
if __name__ == "__main__":
    accounts1 = [
        ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
        ["John", "johnsmith@mail.com", "john00@mail.com"],
        ["Mary", "mary@mail.com"],
        ["John", "johnnybravo@mail.com"],
    ]
    print("Accounts Merge Result:", accounts_merge(accounts1))


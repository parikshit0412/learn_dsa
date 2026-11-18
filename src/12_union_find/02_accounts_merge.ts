/**
 * Problem: #721 - Accounts Merge (Medium)
 * LeetCode Link: https://leetcode.com/problems/accounts-merge/
 * AI Relevance: Entity resolution, deduplication of web datasets (Common Crawl / FineWeb),
 *               and identity linking in knowledge graphs.
 * 
 * Given a list of accounts where each element `accounts[i]` is a list of strings:
 * `accounts[i][0]` is a name, and remaining elements are emails.
 * If two accounts have some email in common, both accounts definitely belong to the same person.
 * Merge accounts belonging to the same person. Return accounts with sorted emails and person name.
 * 
 * Strategy: Union-Find on Account Indices
 * 1. Map each email -> first account index that owns it.
 * 2. If an email has been seen before in another account, union current account index with previous.
 * 3. Group all emails by their root account index.
 * 4. Sort emails for each merged group and format output: `[name, ...sortedEmails]`.
 * 
 * Time Complexity: O(A * k * log(A * k)) where A is total accounts, k is max emails per account.
 * Space Complexity: O(A * k) for email mapping and disjoint sets.
 */

class UF {
  parent: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
    }
  }
}

export function accountsMerge(accounts: string[][]): string[][] {
  const n = accounts.length;
  const uf = new UF(n);
  const emailToAccountIndex = new Map<string, number>();

  // Step 1: Union accounts that share emails
  for (let i = 0; i < n; i++) {
    const emails = accounts[i].slice(1);
    for (const email of emails) {
      if (emailToAccountIndex.has(email)) {
        uf.union(i, emailToAccountIndex.get(email)!);
      } else {
        emailToAccountIndex.set(email, i);
      }
    }
  }

  // Step 2: Group emails by their root account index
  const rootToEmails = new Map<number, Set<string>>();
  for (const [email, accIdx] of emailToAccountIndex.entries()) {
    const root = uf.find(accIdx);
    if (!rootToEmails.has(root)) {
      rootToEmails.set(root, new Set<string>());
    }
    rootToEmails.get(root)!.add(email);
  }

  // Step 3: Format result with account name and sorted emails
  const result: string[][] = [];
  for (const [rootIdx, emailSet] of rootToEmails.entries()) {
    const name = accounts[rootIdx][0];
    const sortedEmails = Array.from(emailSet).sort();
    result.push([name, ...sortedEmails]);
  }

  return result;
}

// --- Example Test Cases / Self Run ---
if (process.env.NODE_ENV !== 'test') {
  const accounts1 = [
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["Mary", "mary@mail.com"],
    ["John", "johnnybravo@mail.com"]
  ];
  console.log('Accounts Merge Result:', accountsMerge(accounts1));
}


/**
 * Day 1 Challenge: Notification Flood‑Fill
 * 
 * 
 * Warm up problems
 *  Leetcode 102 - Binary Tree Level Order Traversal
 *  Leetcode 127 - Word Ladder
 * 
 * Given a map of user IDs to their direct followers, an origin user,
 * and a maximum hop count, return all unique users reachable within
 * that many follower‐hops.
 *
 * Depth 1 = direct followers
 * Depth 2 = followers of followers, etc.
 *
 * @param followers  Adjacency list of follower relationships
 * @param originUser Starting user ID
 * @param maxHops    Maximum number of hops
 * @returns          Array of reachable user IDs (unique, any order)
 */
export function getReachableUsers(
    followers: Map<number, number[]>,
    originUser: number,
    maxHops: number
  ): number[] {
    
    return [];
  }
  
/**
 * Day 4 Challenge: Event Stream Merger
 * 
 * Warm up problems
 *  Leetcode 215 - Kth Largest Element in an Array
 *  Leetcode 23 - Merge k Sorted Lists  
 * 
 * Merge multiple asynchronous, timestamped event streams into one ordered output.
 *
 * Each input stream is an AsyncIterator of events:
 *   { ts: number; payload: any }
 * and each stream’s events are in non‑decreasing timestamp order.
 *
 * Implement `mergeEventStreams` as an async generator that yields
 * all events across the streams in a single non‑decreasing timestamp sequence.
 *
 * @param streams  Array of AsyncIterator<{ ts:number; payload:any }>
 * @returns        AsyncIterableIterator<{ ts:number; payload:any }>
 */
export async function* mergeEventStreams(
    streams: Array<AsyncIterator<{ ts: number; payload: any }>>
  ): AsyncIterableIterator<{ ts: number; payload: any }> {
    
  }
  
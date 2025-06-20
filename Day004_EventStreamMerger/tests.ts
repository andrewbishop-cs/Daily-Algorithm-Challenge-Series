import { mergeEventStreams } from './solution';

/**
 * Helper: turn a plain array into an async iterator
 */
async function* asyncGeneratorFromArray<T>(arr: T[]): AsyncIterableIterator<T> {
  for (const item of arr) {
    // simulate async delay
    await Promise.resolve();
    yield item;
  }
}

async function runEventStreamMergerTest() {
  const stream1 = asyncGeneratorFromArray([
    { ts: 1, payload: 'a' },
    { ts: 4, payload: 'd' }
  ]);

  const stream2 = asyncGeneratorFromArray([
    { ts: 2, payload: 'b' },
    { ts: 3, payload: 'c' }
  ]);

  const merged: Array<{ ts: number; payload: any }> = [];
  for await (const event of mergeEventStreams([stream1, stream2])) {
    merged.push(event);
  }

  console.log('Merged result:', merged);
  console.assert(
    JSON.stringify(merged) === JSON.stringify([
      { ts: 1, payload: 'a' },
      { ts: 2, payload: 'b' },
      { ts: 3, payload: 'c' },
      { ts: 4, payload: 'd' }
    ]),
    'Test failed: merged order is incorrect'
  );
}

runEventStreamMergerTest();

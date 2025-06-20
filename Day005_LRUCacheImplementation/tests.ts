import { LRUCache } from './solution';

function assert(cond: boolean, msg: string) {
  console.log(cond ? '✔' : '✘', msg);
}

export function runLRUTests() {
  console.log('Test 1: capacity = 2');
  const cache = new LRUCache(2);

  cache.put(1, 1);
  cache.put(2, 2);
  assert(cache.get(1) === 1, 'get(1) should return 1');

  cache.put(3, 3);    // evicts key 2
  assert(cache.get(2) === -1, 'get(2) should return -1 (evicted)');

  cache.put(4, 4);    // evicts key 1
  assert(cache.get(1) === -1, 'get(1) should return -1 (evicted)');
  assert(cache.get(3) === 3,  'get(3) should return 3');
  assert(cache.get(4) === 4,  'get(4) should return 4');

  console.log('\nTest 2: capacity = 1');
  const cache2 = new LRUCache(1);
  cache2.put(10, 100);
  assert(cache2.get(10) === 100, 'get(10) should return 100');
  cache2.put(20, 200);  // evicts 10
  assert(cache2.get(10) === -1, 'get(10) should return -1 (evicted)');
  assert(cache2.get(20) === 200, 'get(20) should return 200');
}

// Run the tests
runLRUTests();

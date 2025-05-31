import { TimeBasedKeyValueStore } from './solution';

// Helper function to format test results
function runTest(actual: string, expected: string, testName: string): void {
    const passed = actual === expected;
    console.log(`Test ${testName}:`);
    console.log(`  Expected: "${expected}"`);
    console.log(`  Got:      "${actual}"`);
    console.log(`  Result:   ${passed ? '✅' : '❌'}\n`);
}

// Test cases
let kv = new TimeBasedKeyValueStore();
kv.set('foo', 'bar', 1);
runTest(kv.get('foo', 1), 'bar', '1: Get exact timestamp');
runTest(kv.get('foo', 3), 'bar', '2: Get future timestamp');
kv.set('foo', 'bar2', 4);
runTest(kv.get('foo', 4), 'bar2', '3: Get new value at exact timestamp');
runTest(kv.get('foo', 5), 'bar2', '4: Get new value at future timestamp');

// Edge cases
let kv2 = new TimeBasedKeyValueStore();
runTest(kv2.get('key_not_set', 1), '', '5: Get non-existent key');
runTest(kv.get('foo', 0), '', '6: Get timestamp before any value');

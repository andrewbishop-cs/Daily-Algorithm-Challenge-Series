import { TimeBasedKeyValueStore } from './solution';

// Successful test cases
let kv = new TimeBasedKeyValueStore();
kv.set('foo', 'bar', 1);
let test1 = kv.get('foo', 1) === 'bar' ? '✅' : '❌';
console.log(`Test1 result: ${test1}`);

let test2 = kv.get('foo', 3) === 'bar' ? '✅' : '❌';
console.log(`Test2 result: ${test2}`);

kv.set('foo', 'bar2', 4);
let test3 = kv.get('foo', 4) === 'bar2' ? '✅' : '❌';
console.log(`Test3 result: ${test3}`);

let test4 = kv.get('foo', 5) === 'bar2' ? '✅' : '❌';
console.log(`Test4 result: ${test4}`);

// Edge cases
let kv2 = new TimeBasedKeyValueStore();
let test5 = kv2.get('key_not_set', 1) === '' ? '✅' : '❌';
console.log(`Test5 result: ${test5}`);

let test6 = kv.get('foo', 0) === '' ? '✅' : '❌';
console.log(`Test6 result: ${test6}`);

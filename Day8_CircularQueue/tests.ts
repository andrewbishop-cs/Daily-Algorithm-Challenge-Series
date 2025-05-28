import { CircularQueue } from './solution';

const q = new CircularQueue(3);

q.enqueue(1); q.enqueue(2); q.enqueue(3); let result = q.getRear();
console.log(result === 3 ? '✅ Test case passed!' : '❌ Test case failed!');

q.enqueue(4);
result = q.getRear();
console.log(result === 3 ? '✅ Test case passed!' : '❌ Test case failed!');

q.dequeue(); q.dequeue(); result = q.getFront();
console.log(result === 3 ? '✅ Test case passed!' : '❌ Test case failed!');

q.dequeue(); result = q.dequeue();
console.log(result === -1 ? '✅ Test case passed!' : '❌ Test case failed!')

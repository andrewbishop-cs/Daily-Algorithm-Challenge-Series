/*

	Leetcode warmup
		- Leetcode 232: Implement queue using stacks
		- Leetcode 641: Design circular deque

	You are currently working your way through a legacy system, and as a part of this process, 
	there is a need to implement a new queue data structure to handle a certain type of requests.
	However, a special caveat for this new system is that it must behave as a circular queue.

	The circular queue is a linear data structure in which the operations are performed based on FIFO 
	(First In First Out) principle. The last position is connected back to the first position to make a circle.

	You need to implement a class with the following methods:
	- 'enqueue': Add an element to the end of the queue.
	- 'dequeue': Remove an element from the start of the queue.
	- 'getFront': Show the first element of the queue.
	- 'getRear': Show the last element of the queue.
*/

export class CircularQueue {

	constructor(length: number) {
	}

	enqueue(elem: number): void {
		// TODO: implement code here
	}
	
	dequeue(): number {
		// TODO: implement code here
		return -1;  // Temporary return to fix linter
	}
	
	getFront(): number {
		// TODO: implement code here
		return -1;  // Temporary return to fix linter
	}
	
	getRear(): number {
		// TODO: implement code here
		return -1;  // Temporary return to fix linter
	}
}

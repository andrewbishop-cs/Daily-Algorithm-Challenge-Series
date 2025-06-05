/*

Daily Challenge #14 - Server Request Manager

As part of our ongoing efforts to over-serve our cloud, we've been tasked with developing a Server Request Manager. 
The server has strict constraints: it can process a fixed number of simultaneous requests at a given time. 
Any requests that come in while the server is already processing the maximum number of requests must wait in 
a queue and be processed once there is capacity.

The part of your task will be to simulate this queue, because IT will build the rest accordingly.

You will be given an array of requests (each represented with a number that correspond to the time needed to 
process it) and the number of maximum simultaneous requests that can be processed. Assume the server starts 
processing requests as soon as possible. You need to return the completion time for each request in the order 
of their arrival. If two or more requests finish at the same time, the next request should start in the order 
they are in the queue.

Example: serverRequestManager([1,2,3,4,5,6], 3) should return [1,2,3,4,5,6]

Warm-up challenges:
- LeetCode easy/medium: 621. Task Scheduler
- LeetCode medium/hard: 358. Rearrange string k distance apart

*/

export function serverRequestManager(requests: number[], maxSimultaneousRequests: number): number[] {
  // TODO: implement code here
  return [];
}

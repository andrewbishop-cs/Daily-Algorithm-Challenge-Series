import PriorityQueue from 'js-priority-queue'

export function serverRequestManager(requests: number[], maxSimultaneousRequests: number): number[] {
    
    const n = requests.length
    if ( n == 0 ) return []

    const pq = new PriorityQueue<[number, number]>({ comparator: (a, b) => a[0] - b[0] });

    const result: number[] = new Array(n)

    let i = 0
    
    for (; i < Math.min(maxSimultaneousRequests, n); i++ ) pq.queue([requests[i], i])

    while ( pq.length ) {

        const [finishTime, requestI] = pq.dequeue()
        result[requestI] = finishTime

        if ( i < n ) {
            pq.queue([finishTime + requests[i], i])
            i++
        }

    }

    return result
  }
  
import PriorityQueue from 'js-priority-queue';

/*
 * Flight Network Optimizer
 *
 * A major airline operates a number of flights and wants to optimize its network by finding the shortest
 * path for a passenger to travel (measured in hours) between two airports. The airline operates both
 * direct and connect flights. For this task, they have asked you to implement an algorithm that can
 * find the shortest path in terms of time, between two given airports.
 *
 * The nodes represent the airports, and the edges represent flights. Each edge has a time associated
 * (measured in hours), and each node has a hold time representing the minimum amount of time a passenger
 * must spend at an airport before they can board their next flight.
 *
 * Given the flight network, your task is to devise the shortest route plan from one airport to another.
 *
 * Input: 
 *   - flightNetwork: Map<string, Map<string, number>> - adjacency list where key is airport and value 
 *     is a map of destination airports to flight times
 *   - holdTimes: Map<string, number> - minimum hold time (in hours) required at each airport
 *   - start: string - the airport where the journey starts
 *   - end: string - the airport where the journey ends
 *
 * Output: the minimum total time (in hours) for the fastest journey route
 *
 * Comments: The flightNetwork is represented as an adjacency list for simplicity. Each key in the flightNetwork
 *           map represents an airport. The value is another map, where the keys represent the destination airports      
 *           and the values represent the flight time in hours.
 *
 * Complexity Analysis: 
 * Time complexity: 
 * Space complexity:
 *
 * Warm Ups: 
 * 	- Warm-up problem 1 (easy): https://leetcode.com/problems/angle-between-hands-of-a-clock/
 * 	- Warm-up problem 2 (medium): https://leetcode.com/problems/network-delay-time/ 
 * 
 */

function findShortestFlightTime(
    flightNetwork: Map<string, Map<string, number>>, 
    holdTimes: Map<string, number>, 
    start: string, 
    end: string
): number {
    
    const n = flightNetwork.size
    const pq = new PriorityQueue<{location: string, time: number}>({ comparator: (a, b) => a.time - b.time });
    const distances: Map<string, number> = new Map()
    for ( const [location, _] of flightNetwork ) {
        distances.set(location, Infinity)
    }
    distances.set(start, 0)

    pq.queue({location: start, time: 0})
    while ( pq.length ) {

        const {location, time} = pq.dequeue()
        if ( time > distances.get(location)! ) continue
    
        for ( const [neighbour, nTime] of flightNetwork.get(location) || []) {

            const extraTime = (neighbour == end) ? 0 : holdTimes.get(neighbour)!

            if ( distances.get(neighbour)! > time + nTime + extraTime ) {
                distances.set(neighbour, time + nTime + extraTime)
                pq.queue({location: neighbour, time: distances.get(neighbour)!})
            }
        }

    }


    return distances.get(end)!;
}

export default findShortestFlightTime;
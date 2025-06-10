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
 * Input: flightNetwork: Map, where key-values represent the airport (nodes) and its connecting flights(edges)
 *                   holdTimes: Map, represents the minimum hold time passengers must spend in the airport
 *                   start: string - the airport where the journey starts
 *                   end: string - the airport where the journey ends
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
export function findShortestFlightTime(flightNetwork: Map <string, Map <string, number >>, 
	holdTimes: Map <string, number>, start: string, end: string): number {
    //TODO: Implement the function here
	return 0
}
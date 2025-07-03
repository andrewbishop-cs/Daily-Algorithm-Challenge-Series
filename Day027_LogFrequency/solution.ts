export function topKFrequentEvents(events: string[], k: number): string[] {

	if ( events.length == 0 ) return events

	const map: Map<string, number> = new Map()
	for ( const event of events ) {
		map.set(event, (map.get(event) || 0) + 1)
	}

	const order: [string, number][] = []
	for ( const entry of map.entries() ) order.push(entry)
	order.sort((a, b) => b[1] - a[1])

	const result: string[] = []
	for ( let i = 0; i < k; i++ ) result.push(order[i][0])

  	return result;
}
  
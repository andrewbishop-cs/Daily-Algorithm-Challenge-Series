export class TimeBasedKeyValueStore {

    store: Map<string, [string, number][]> 

	constructor() { this.store = new Map() }
	
	set(key: string, value: string, timestamp: number): void {
        
        if ( !this.store.has(key) ) this.store.set(key, [])
        this.store.get(key)!.push([value, timestamp])

	}
	
	get(key: string, timestamp: number): string {
        
        let timestamps = this.store.get(key) || []
        const index = this.binarySearch(timestamps, timestamp)
        
        return (index != -1) ? timestamps[index][0] : ""
        
	}

    binarySearch(timestamps: [string, number][], target: number): number {
       
        let l = 0, r = timestamps.length -1, mid = 0
        let ans = -1
        
        while ( l <= r ) {
            mid = Math.floor((l + r) / 2) 
            if ( timestamps[mid][1] <= target ) {
                l = mid + 1
                ans = mid
            } else {
                r = mid - 1
            }

        }

        return ans
    }
}

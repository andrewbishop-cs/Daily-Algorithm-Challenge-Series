export class CloudStorage {
	private allocation: (string | null)[] = []
	private blockStart: number = 0
	private blockEnd: number = 0

	allocateStorage(blocks: number[], plans: {user: string, startAt: number, endAt: number}[]): boolean {

		if ( blocks.length === 0 ) return false

		this.blockStart = blocks[0]
		this.blockEnd = blocks[blocks.length - 1]
		this.allocation = new Array(blocks.length).fill(null)

		for ( const {user, startAt, endAt} of plans ) {

            // if out of bounds return false
			if ( startAt < this.blockStart || endAt > this.blockEnd || startAt > endAt ) return false

            // check if allocation is valid
			for ( let i = startAt; i <= endAt; i++ ) {
				const idx = i - this.blockStart
				if ( this.allocation[idx] !== null && this.allocation[idx] !== user ) {
					return false
				}
			}
            
            // allocation is valid, insert user
            for ( let i = startAt; i <= endAt; i++ ) {
				const idx = i - this.blockStart
				this.allocation[idx] = user
			}
		}

		return true;
	}

	extendPlan(plans: {user: string, extendBy: number}[]): boolean {
		
        for ( const {user, extendBy} of plans ) {

			// finding rightmost block owned by user
			let lastIdx = -1
			for ( let i = this.allocation.length - 1; i >= 0; i-- ) {
				if ( this.allocation[i] === user ) {
					lastIdx = i
					break
				}
			}
            
            // return false if user has no allocation
			if ( lastIdx === -1 ) return false

			// check extension validity
			const newEnd = lastIdx + extendBy
			if ( newEnd >= this.allocation.length ) return false

			for ( let i = lastIdx + 1; i <= newEnd; i++ ) {
				if ( this.allocation[i] !== null && this.allocation[i] !== user ) {
					return false
				}
			}
			// extension is valid, extend
			for ( let i = lastIdx + 1; i <= newEnd; i++ ) {
				this.allocation[i] = user
			}
		}
		return true
	}
}

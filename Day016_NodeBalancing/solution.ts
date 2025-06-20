const balanceus = (us: Map<string, string[]>): Map<string, string[]> => {
	// TODO: implement code here

	const map: Map<string, Set<string>> = new Map()
	const result: Map<string, string[]> = new Map()

	// symmetrise

	for ( const [u, neighbours] of us ) {
		if ( !map.has(u) ) map.set(u, new Set())
		
		for ( const v of neighbours || [] ) {
			if ( !map.has(v) ) map.set(v, new Set())
			
			map.get(u)!.add(v)
			map.get(v)!.add(u)
		}
	}

	// balance

	for ( const [u, neighbours] of map ) {
		for ( const v of neighbours || [] ) {
			let du = map.get(u)!.size
			let dv = map.get(v)!.size

			while ( Math.abs(du - dv) > 1 ) {
				if ( du - dv > 1 ) {

					const candidates = [...map.get(u)!].filter((x) => x != v)
					const x = candidates[0]

					map.get(u)!.delete(x)
					map.get(x)!.delete(u)

				} else if ( dv - du > 1 ) {

					const candidates = [...map.get(v)!].filter((x) => x != u)
					const x = candidates[0]

					map.get(v)!.delete(x)
					map.get(x)!.delete(v)
				}

				du = map.get(u)!.size
				dv = map.get(v)!.size
			}
		}
	}

	for ( const [node, neighbours] of map ) {
		result.set(node, [...neighbours])
	}
	

	return result
   };
   
   export default balanceus;
   
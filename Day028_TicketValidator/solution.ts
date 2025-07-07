export default function validateTickets(ticketsBatch: string[][]): boolean[][] {
	const result: boolean[] = []

    for ( const ticket of ticketsBatch[0] || [] ) {
        let odd = 0, even = 0
        for ( let i = 0; i < ticket.length; i++ ) {
            if ( i % 2 == 0 ) {
                even += ticket.charCodeAt(i)
            } else {
                odd += ticket.charCodeAt(i)
            }
        }
        if ( odd == even ) result.push(true)
        else result.push(false)
    }

	return [result]
}
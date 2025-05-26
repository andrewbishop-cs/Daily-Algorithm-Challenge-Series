export interface Event {
    start: number;
    end: number;
  }
  
export function maxNonOverlappingEvents(events: Event[]): Event[] {

  if ( events.length == 0 ) return []

  events.sort((a, b) => a.end - b.end)

  const result: Event[] = []
  let lastEnd = -Infinity

  for ( let ev of events ) {

    if ( ev.start >= lastEnd ) {
      result.push(ev)
      lastEnd = ev.end
    }

  }

  return result;
}
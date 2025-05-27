export function hasErrorBurst(
    timestamps: number[],
    windowSeconds: number,
    maxErrors: number
  ): boolean {

    const deque: number[] = [];

    for (const ts of timestamps) {

        deque.push(ts)
        while ( deque.length && ts - deque[0] > windowSeconds) {
            deque.shift()!
        }

        if ( deque.length > maxErrors ) return true

    }

    return false;
}
  
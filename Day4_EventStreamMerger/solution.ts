class MinPQ {
  private heap: { idx: number; ts: number }[] = [];

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  enqueue(entry: { idx: number; ts: number }): void {
    this.heap.push(entry);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue(): { idx: number; ts: number } | null {
    if (this.isEmpty()) return null;

    this.swap(0, this.heap.length - 1);
    const min = this.heap.pop()!;
    this.sinkDown(0);
    return min;
  }

  
  private bubbleUp(i: number): void {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[i].ts < this.heap[parent].ts) {
        this.swap(i, parent);
        i = parent;
      } else {
        break;
      }
    }
  }

  private sinkDown(i: number): void {
    const n = this.heap.length;
    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.heap[left].ts < this.heap[smallest].ts) {
        smallest = left;
      }
      if (right < n && this.heap[right].ts < this.heap[smallest].ts) {
        smallest = right;
      }

      if (smallest !== i) {
        this.swap(i, smallest);
        i = smallest;
      } else {
        break;
      }
    }
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}


export async function* mergeEventStreams(
  streams: Array<AsyncIterator<{ ts: number; payload: any }>>
): AsyncIterableIterator<{ ts: number; payload: any }> {

  const heads = await Promise.all(streams.map(s => s.next()));

  // build min heap
  const minHeap = new MinPQ()

  heads.forEach((h, i) => {
    if (!h.done) minHeap.enqueue({idx: i, ts: h.value.ts})
  });
  
  while ( !minHeap.isEmpty() ) {
    const { idx } = minHeap.dequeue()!
    const { value: evt } = heads[idx]
    yield evt;
    heads[idx] = await streams[idx].next();
    if ( !heads[idx].done ) minHeap.enqueue({idx: idx, ts: heads[idx].value.ts});

  }

  return;
}
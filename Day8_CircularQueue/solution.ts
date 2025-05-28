
export class CircularQueue {
	private arr: number[] = [];
	private head: number = 0;
	private tail: number = 0;
	private count: number = 0;
	private maxSize: number

	constructor(length: number) {
		this.arr = new Array(length);
		this.maxSize = length
	}

	enqueue(elem: number): void {
		if ( this.count == this.maxSize ) return
        this.arr[this.tail] = elem
        this.tail = (this.tail + 1) % this.maxSize
        this.count++	
	}
	
	dequeue(): number {
		if ( this.count == 0 ) return -1
        
        const popped = this.arr[this.head]
        this.arr[this.head] = -1
        this.head = (this.head + 1) % this.maxSize
        this.count--

		return popped; 
	}
	
	getFront(): number {
		
        if ( this.count == 0 ) return -1
        return this.arr[this.head]
	}
	
	getRear(): number {
		if ( this.count == 0 ) return -1
        return this.arr[(this.tail - 1 + this.maxSize) % this.maxSize]
	}
}

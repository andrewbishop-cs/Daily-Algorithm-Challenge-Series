class DLLNode {
    key: number
    value: number
    next: DLLNode | null
    prev: DLLNode | null

    constructor(key: number, value: number) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    head: DLLNode
    tail: DLLNode

    constructor() {
        this.head = new DLLNode(0, 0)
        this.tail = new DLLNode(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    addToFront(node: DLLNode): void {

        node.next = this.head.next
        node.prev = this.head
        this.head.next!.prev = node
        this.head.next = node 

    }

    remove(node: DLLNode): void {
        node.prev!.next = node.next
        node.next!.prev = node.prev
    }

    moveToFront(node: DLLNode): void {
        this.remove(node)
        this.addToFront(node)
    }

    removeLast(): DLLNode | null {

        if ( this.head.next == this.tail ) return null

        const node = this.tail.prev
        this.remove(node!)
        return node

    }
}


export class LRUCache {

    capacity: number;
    map: Map<number, DLLNode>
    linkedList: DoublyLinkedList


    constructor(capacity: number) {
        this.capacity = capacity
        this.map = new Map()
        this.linkedList = new DoublyLinkedList()

    }

    /**
     * Retrieve the value of the key if present, otherwise return -1.
     * Mark the key as recently used.
     */
    get(key: number): number {
        
        if ( this.map.has(key) ) {
            const node = this.map.get(key)!
            this.linkedList.moveToFront(node)
            return node.value
        }

        return -1;
    }

    /**
     * Insert or update the key with the given value.
     * If the cache exceeds capacity, evict the least recently used key.
     */
    put(key: number, value: number): void {
        
        if ( this.map.has(key) ) {

            const node = this.map.get(key)!
            node.value = value
            this.map.set(key, node)
            this.linkedList.moveToFront(node)

        } else {
            const node = new DLLNode(key, value)

            this.linkedList.addToFront(node)
            this.map.set(key, node)

            if ( this.map.size > this.capacity ) {
                

                const removed = this.linkedList.removeLast()!
                this.map.delete(removed.key)

            }
        }
    }
}

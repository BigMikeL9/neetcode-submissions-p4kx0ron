class ListNode {
    key: number
    val: number
    prev: ListNode | null
    next: ListNode | null
    constructor(key: number, val: number, prev: ListNode, next: ListNode) {
        this.key = key
        this.val = val
        this.prev = prev
        this.next = next
    }
}

class LRUCache {
    private capacity: number
    private hashMap: Map<number, ListNode>
    private head: ListNode // head will represent the least used node. (to be evicted)
    private tail: ListNode

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
        this.hashMap = new Map()
        this.head = new ListNode(11111, 111, null, null)
        this.tail = new ListNode(99999, 999, null, null)

        // link head and tail together
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    // inserts node at the end of the linked list
    insertNode(node: ListNode) {
        const currLastNode = this.tail.prev
        // currLastNode.prev = node.prev
        currLastNode.next = node
        node.prev = currLastNode
        node.next = this.tail
        this.tail.prev = node
    }

    deleteNode(node: ListNode) {
        const prev = node.prev
        const next = node.next
        
        // update next and prev nodes
        prev.next = next
        next.prev = prev

        // remove current node pointers
        // node.next = null
        // node.prev = null
        console.log(node)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.hashMap.has(key)) {
            const node = this.hashMap.get(key)

            // update the order of the nodes
            // move to the end of the linked list
            this.deleteNode(node)
            this.insertNode(node)
            
            return node.val
        }

        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.hashMap.has(key)) {
            const node = this.hashMap.get(key)
            node.val = value
            this.deleteNode(node)
            this.insertNode(node)
        } else {
            // check capacity
            // if exceed, insert new node and evict least used
            if (this.hashMap.size === this.capacity) {
                // evict 
                const firstNode = this.head.next
                this.deleteNode(firstNode)
                this.hashMap.delete(firstNode.key)
            }

            // insert
            const node = new ListNode(key, value, null, null)
            this.insertNode(node)
            this.hashMap.set(key, node)
        }
    }
}


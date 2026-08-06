class MinPriorityQueue2 {
    queue: number[]

    constructor() {
        this.queue = []
    }

    enqueue(n: number) {
        this.queue.push(n)
        return this.queue.sort((a, b) => a - b)
    }

    front() {
        return this.queue[0]
    }

    dequeue() {
        return this.queue.shift()
    }

    size() {
        return this.queue.length
    }
}

class KthLargest {
    priorityQueue: MinPriorityQueue2
    k: number

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.priorityQueue = new MinPriorityQueue2()
        this.k = k

        for (const n of nums) {
            this.priorityQueue.enqueue(n)
        }

        // should be sorted in descending order. ie: max num at the top
        console.log(this.priorityQueue)
    }

    resize() {
        while (this.priorityQueue.size() > this.k) {
            this.priorityQueue.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        const pq = this.priorityQueue.enqueue(val)
        this.resize()

        console.log(this.priorityQueue)

        return this.priorityQueue.front()
    }
}

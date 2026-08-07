class MaxxPriorityQueue {
    queue: number[][]

    constructor() {
        this.queue = []
    }

    enqueue(val: number[]){
        this.queue.push(val)
        return this.queue.sort((a, b) => b[2] - a[2])
    }

    dequeue() {
        return this.queue.shift()
    }

    size() {
        return this.queue.length
    }

    values() {
        return [...this.queue]
    }
}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const pq = new MaxxPriorityQueue()

        for (const [x, y] of points) {
            const dist = Math.sqrt((0 - x) ** 2 + (0 - y) ** 2)
            pq.enqueue([x, y, dist])
        }

        console.log(pq)

        while (pq.size() > k) {
            const dequeued = pq.dequeue()
        }

        return pq.values().map(([x, y, d]) => [x, y])
    }
}

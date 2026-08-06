class PriorityQueuee {
    queue: number[]

    constructor() {
        this.queue = []    
    }

    enqueue(val: number) {
        this.queue.push(val)
        return this.queue.sort((a, b) => b - a)
    }

    dequeue() {
        return this.queue.shift()
    }

    size() {
        return this.queue.length
    }

    front() {
        return this.queue[0]
    }

    values() {
        return this.queue
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const pq = new PriorityQueuee()

        for (const st of stones) {
            pq.enqueue(st)
        }
        console.log(pq)

        while (pq.size() > 1) {
            const x = pq.dequeue()
            const y = pq.dequeue()

            if (x === y) continue
            if (x > y) {
                const diff = x - y
                pq.enqueue(diff)
            }
        }

        console.log(pq)

        return pq.size() === 0 ? 0 : pq.front()
    }
}

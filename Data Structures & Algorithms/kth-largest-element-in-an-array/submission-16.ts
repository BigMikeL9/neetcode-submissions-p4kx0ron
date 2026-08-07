class MinnPriorityQueue {
    queue: number[]

    constructor() {
        this.queue = []
    }

    enqueue(val: number): number[] {
        this.queue.push(val)
        return this.queue.sort((a, b) => a - b)
    }

    dequeue(): number {
        return this.queue.shift()
    }

    size(): number {
        return this.queue.length
    }

    values(): number[] {
        return [...this.queue]
    }

    front(): number | null {
        if (this.queue.length === 0) return null
        return this.queue[0]
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        const pq = new MinPriorityQueue()

        // [1, 2, 3] > k -> [2, 3]
        // [2, 3, 5] > k -> [3, 5]
        // [3, 4, 5] > k -> [4, 5]
        for (const n of nums) {
            pq.enqueue(n)

            if (pq.size() > k) {
                const dequeued = pq.dequeue()
            }
        }

        return pq.front()
    }

    // Time: O(nlogk)
    // Space: O(k)
    // where n is the number of element in our nums array and k is the number
    // of elements stored in the heap
}

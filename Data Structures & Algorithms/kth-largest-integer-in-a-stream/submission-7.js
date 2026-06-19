/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.nums = nums
        this.minHeap = new MinPriorityQueue();

        console.log(this.minHeap)

        // [1, 2, 3, 3]
        for (const n of nums) {
            this.minHeap.enqueue(n)
        }

        // remove smallest items from pq until we have k number of nums
        // [2, 3, 3]
        this.resizeWin()

        console.log('---', this.minHeap)
    }

    resizeWin() {
        console.log(this.nums)
        while (this.minHeap.size() > this.k) {
            const dequeued = this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val)

        this.resizeWin()
        console.log('---iii---', val, this.minHeap.front(), this.minHeap)

        return this.minHeap.front();
    }
}

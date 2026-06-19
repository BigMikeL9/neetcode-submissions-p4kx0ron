/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

// We can use a minHeap where we initailly queue all numbers in the pq, then we remove the smallest
// numbers until we have a window size of k. That will allow us to get the smallest number in the window
// which will represent the kth largest value. Every time we add a value, we queue that new number, and then 
// we shrink our window to get the kth largest value.

// Time Complexity would be O(m * logk) 
// Space Complexity would be O(k)
// Where k is the number of items in the queue and m is the number of times we call add and resize our window

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.minHeap = new MinPriorityQueue();

        console.log(this.minHeap)

        // [1, 2, 3, 3]
        for (const n of nums) {
            this.minHeap.enqueue(n)
        }

        console.log('---', this.minHeap)
    }

    // remove smallest items from pq until we have k number of nums
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

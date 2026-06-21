// My first intinct would be to use a max-heap priority queue where we queue every number in the pq
// and then dequeue k number number from the queue. In the end return the kth popped item.
// Time Complexity would be O(nlogn) [enqueue] + O(klogn) [dequeue] which gets simplified to O(nlogn)
// Space Complexity would be O(n)

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const pq = new MaxPriorityQueue();
        let res = 0;

        // queue items in pq
        for (const n of nums) {
            pq.enqueue(n)
        }

        console.log(pq)

        // dequeue k number of items
        for (let i = k; i > 0; i--) {
            const dequeued = pq.dequeue();
            console.log(dequeued)
            if (i === 1) res = dequeued;
        }

        return res
    }
}

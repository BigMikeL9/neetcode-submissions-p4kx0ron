/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const pq = new MaxPriorityQueue();

        // queue all stones
        for (const st of stones) {
            pq.enqueue(st);
        }

        console.log(pq)

        while (pq.size() >= 2) {
            let y = pq.dequeue()
            let x = pq.dequeue()

            console.log(x, y, x < y)

            if (x < y) pq.enqueue(y - x)
        }

        console.log(pq)
        return pq.size() >= 1 ? pq.front() : 0;
    }
}

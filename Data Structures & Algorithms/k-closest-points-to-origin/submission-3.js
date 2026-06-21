/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

// Time Complexity would be O(nlogn) + O(klogn) which gets simplified to O(nlogn), since n is greater than k
// Space Complexity would be linear O(n) excluding the output which would be O(n + k)

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pq = new MinPriorityQueue(el => el[0])
        let res = []

        // queue items into pq
        for (const [x, y] of points) {
            const d = Math.sqrt(x ** 2 + y ** 2);
            pq.enqueue([d, x, y])
        }

        // dequeue k number of items
        while (res.length < k) {
            const [d, x, y] = pq.dequeue();
            res.push([x, y])
        }

        return res
    }
}

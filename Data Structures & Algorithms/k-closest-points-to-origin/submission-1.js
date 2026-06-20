/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const pq = new MinPriorityQueue(el => el[0]);
        const res = [];

        for (const [x, y] of points) {
            const d = Math.sqrt(x ** 2 + y ** 2);
            console.log([d, x, y])
            pq.enqueue([d, x, y])
        }


        while (res.length < k) {
            const [d, x, y] = pq.dequeue();
            console.log('dequeue', [d, x, y])
            res.push([x, y])
        }

        return res
    }
}

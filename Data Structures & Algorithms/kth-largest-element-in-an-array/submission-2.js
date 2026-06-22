

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const pq = new MinPriorityQueue();

        // queue nums 
        // O(nlogk)
        for (const n of nums) {
            pq.enqueue(n)

            if (pq.size() > k) pq.dequeue();
        }

        // dequque kth largest
        return pq.dequeue();
    }
}

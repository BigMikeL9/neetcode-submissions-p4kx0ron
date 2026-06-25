class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const hashMap = new Map()
        const pq = new MaxPriorityQueue()
        const queue = []
        let time = 0;

        // get freq count
        for (const t of tasks) {
            hashMap.set(t, (hashMap.get(t) || 0) + 1);
        }

        // max heap
        for (const [key, val] of hashMap) {
            pq.enqueue(val)
        }

        while (pq.size() || queue.length > 0) {
            // pop task
            const dequeued = pq.dequeue()
            const freq = dequeued - 1

            // update time
            time += 1

            // add task to queue
            // [freq, cooldown]
            if (freq > 0) queue.push([freq, time + n])

            // shift ready tasks and add to pq
            if (queue.length > 0 && queue[0][1] === time) pq.enqueue(queue.shift()[0])
        }

        return time
    }
}

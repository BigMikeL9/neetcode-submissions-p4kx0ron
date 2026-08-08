/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class MinnPriorityQueue {
    queue: ListNode[]

    constructor() {
        this.queue = []
    }

    enqueue(val: ListNode) {
        this.queue.push(val)
        return this.queue.sort((a, b) => a.val - b.val)
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
}

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        const pq = new MinPriorityQueue((x) => x.val)
        const dummy = new ListNode()

        // O(logk)
        for (const l of lists) {
            pq.enqueue(l)
        }

        // O(nlogk)
        let curr = dummy
        while (pq.size()) {
            const dequeued = pq.dequeue()

            curr.next = dequeued
            curr = curr.next

            // queue linked nodes in root
            if (dequeued.next !== null) pq.enqueue(dequeued.next)
        }

        return dummy.next
    }

    // Time: O(nlogk)
    // Space O(k)
    // where k is the number of linked lists and n is the total number of nodes
    // heap will have a max number of k nodes
}

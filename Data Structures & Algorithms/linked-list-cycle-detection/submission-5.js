/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head, hashSet = new Set()) {
        if (!head) return false;
        if (hashSet.has(head)) return true;
        hashSet.add(head);
        return this.hasCycle(head.next, hashSet)   
    }
}

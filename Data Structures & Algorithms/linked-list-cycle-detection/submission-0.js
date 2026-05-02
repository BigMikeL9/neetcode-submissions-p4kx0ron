/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// We can use a hashSet to store seen nodes. If we see a node more than once return false, other if
// we reach the end of the node list we return true
// Time Complexity is O(n)
// Space Complexity is also linear O(n)
// Where n is the number of nodes

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const hashSet = new Set();
        let curr = head;

        while (curr) {
            if (hashSet.has(curr)) return true;
            hashSet.add(curr);
            curr = curr.next
        }

        return false;
    }
}

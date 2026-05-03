/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// As we walk through the nodes, we can flip its pointers to point to the nodes, 
// behind it. 
// Time Complexity would be linear O(n)
// Space Complexity would be constant O(1) 
// where n is the number of nodes

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        // null -> 0 -> 1 -> 2 -> 3 -> 4
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}

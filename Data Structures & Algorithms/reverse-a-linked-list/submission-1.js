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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null; // will be last element
        let curr = head;

        // null -> 1 -> 2 -> 3 -> 4
        // 
        while (curr) {
            const next = curr.next; // 2 {Store}
            curr.next = prev; // null {Reverse}
            prev = curr; 
            curr = next;
        }

        console.log(prev)

        return prev;
    }
}

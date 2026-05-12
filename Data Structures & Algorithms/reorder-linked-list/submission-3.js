/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Brute Force
// 1. Push nodes onto a stack
// 2. Relink nodes by using two pointers. One pointed at the first element in the 
// stack and one at the end. As nodes are re-linked, we increment and decrement 
// the left and right pointers
// Time Complexity is O(2n) or linear O(n)
// Space Complexity is linear O(n) for the extra memory allocated to store the nodes

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        const nodes = [];

        let curr = head;
        while (curr) {
            nodes.push(curr);
            curr = curr.next;
        }

        // relink nodes
        // [0, 1, 2, 3, 4, 5, 6]
        // 0 -> 6 -> 1 -> 5
        let l = 0;
        let r = nodes.length - 1;
        while (l < r) {
            nodes[l].next = nodes[r];
            l++;
            nodes[r].next = nodes[l];
            r--;
        }

        nodes[l].next = null;
    }
}

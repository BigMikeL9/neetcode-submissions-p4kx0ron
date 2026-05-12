/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// 1. Find the midpoint using two pointers. Fast and a slow. When fast reaches end
// slow will be at mid point
// 2. Reverse the second halved part
// 3. Merge both parts
// Time Complexity will be O(n)
// Space Complexity will be O(1)

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

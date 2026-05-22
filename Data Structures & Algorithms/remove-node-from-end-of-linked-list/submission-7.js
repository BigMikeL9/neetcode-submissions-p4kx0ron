/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// I will use two pointers. A slow and a fast pointer where the distance between them is n + 1.
// When the fast pointer reaches the end of the list, the slow pointer will be at the node prior to the node
// we want to remove. We can then update that node to point to the node after the nth node

// Time Complexity would be O(n) where n is the number of nodes in the list
// Space Complexity would be O(1) since we need no extra space

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = { val: 0, next: head};

        let slow = dummy;
        let fast = dummy.next;

        // move fast pointer forward
        for (let i = 0; i < n; i++) {
            fast = fast.next;            
        }

        console.log(fast)

        // distance between pointers is no n
        // move both pointers until fast pointer reaches the end of the list
        while (fast) {
            slow = slow.next;
            fast = fast.next;
        }

        // remove nth node
        slow.next = slow.next.next;

        return dummy.next;
    }
}

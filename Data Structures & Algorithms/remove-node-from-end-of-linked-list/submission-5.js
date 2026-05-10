/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Optimal solution would to use two pointers, left and right, where the distance
// between them is the n. When the right pointer reaches the end of the linked list
// the left pointer will be at the nth element. We then disconenct it from the 
// list. 
// Time Complexity would be O(n)
// Space Complexity would be constant O(1)

// A Brute Force solution would be to store every node in a stack
// Remove the nth node from the stack and then reconnect to the nodes
// Time complexity would be linear O(n)
// Space Complexity would also be linear O(n) for the extra space allocated
// for the stack. 
// Where n is the number of nodes

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = { val: 0, next: head }
        let l = dummy;
        let r = head;

        // move right pointer to nth
        for (let i = 0; i < n - 1; i++) {
            r = r.next;
        }

        console.log(r)

        // move pointers
        let prev = null;
        let curr = null;
        while (r) {
            prev = l;
            curr = r;
            l = l.next;
            r = r.next;
        }

        console.log(prev)
        console.log(curr)

        // reconnect node
        prev.next = prev.next.next;

        return dummy.next;
    }
}

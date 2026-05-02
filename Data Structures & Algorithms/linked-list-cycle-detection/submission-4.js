/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// An optimal solution would be to use Floyd's Tortoise & Hare algorithm, where we use two pointers
// that start at the same position and have one go faster than the other. If we have a cycle, the fast
// pointer will catch up to the slow pointer and that will tell us that we have a cycle.
// Time Complexity would be O(n)
// Space Complexity would be constant O(1)

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === slow) return true;
        }

        return false;
    }
}

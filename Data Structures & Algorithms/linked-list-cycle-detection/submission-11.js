/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Optimal solution would be to use Floyd's Tortoise & Hare algorithm
// where we use two pointer, slow and fast, where the fast forward is always
// ahead of th slow pointer. If there is a cycle both pointer will meet again
// If there isn't, the fast pointer will reach a null node. 
// Time Complexity is the same as the brute force solution linear O(n)
// Space Complexity is constant O(1) since we didnot need to allocate memory
// for a hashSet 

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === slow) return true;
        }

        return false;
    }
}

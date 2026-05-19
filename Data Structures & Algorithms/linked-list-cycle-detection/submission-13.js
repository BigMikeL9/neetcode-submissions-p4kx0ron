/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// I will use a hashset to keep track of seen nodes
// As I walk through the list, I will check if the curr node exist in a hashet, if it does that means
// we have a loop, in which case we return true. Otherwise we add the node to the hashset and move the pointer
// If we reach the end of the list that means we dont have a loop.

// Time Complexity is O(n) where n is the number of nodes
// Space Complexity is also O(n) where in worst case we store all node in the hashset


class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let hashSet = new Set();
        let curr = head;

        while (curr) {
            if (hashSet.has(curr)) return true;
            hashSet.add(curr);
            curr = curr.next;
        }

        return false;
    }
}

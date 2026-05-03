/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Brute force solution would be to use a hashset to store nodes that we have 
// seen as we walk through the nodes. If a node has been seen before that means
// we have a cycle. Otherwise, if we reach a null node, then that means we
// dont have a cyle. 
// Time Complexity would be O(n)
// Space Complexity would be also be linear O(n)
// where n is the number of nodes in the linkedlist

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
            curr = curr.next;
        }

        return false;
    }
}

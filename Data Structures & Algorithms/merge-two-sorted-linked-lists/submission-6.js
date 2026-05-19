/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// I will use two pointers 

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = { val: 0, next: null };
        let curr = dummy;
        let l1 = list1;
        let l2 = list2;
    
        // links nodes
        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }

            curr = curr.next;
        }

        // link unlinked node
        if (l1) curr.next = l1;
        else if (l2) curr.next = l2;

        return dummy.next;
    }
}

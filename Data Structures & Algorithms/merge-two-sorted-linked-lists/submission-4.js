/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Since both linked lists are sorted we can scan through both comparing the node values

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const node = { val: 0, next: null };
        let curr = node;        

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }

            curr = curr.next;
        }

        if (list1) { 
            curr.next = list1;
        } else if (list2) {
            curr.next = list2;
        }

        return node.next;
    }
}

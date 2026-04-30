/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const arr = []

        let curr = list1;
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }

        curr = list2;
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }

        if (arr.length === 0) return null;

        arr.sort((a, b) => a - b);

        const head = new ListNode(arr[0]);
        curr = head;
        for (let i = 1; i < arr.length; i++) {
            curr.next = new ListNode(arr[i]);
            curr = curr.next;
        }

        console.log(head);

        return head;
    }
}

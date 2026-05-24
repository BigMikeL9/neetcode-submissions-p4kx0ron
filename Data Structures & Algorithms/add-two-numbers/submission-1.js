/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Since digits are stored in reverse order, this actaully helps us because doing aritmetic sum, we go from 
// right to left. 
// We can pass through each list getting the sum of the values of each node, and then storing the carry which is 
// to be add to the next sum.
// A few edge cases would be to there are no nodes left but there is a carry

// Time Complexity would be O(n)
// Space Complexity would be constant O(1)

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = { val: 0, next: null };
        let curr = dummy;

        let carry = 0;

        while (l1 || l2 || carry) {
            const v1 = l1?.val || 0;
            const v2 = l2?.val || 0;

            // 9 + 3 = 12
            // carry = 1
            // nodeValue = 2
            const sum = v1 + v2 + carry;
            carry = Math.floor(sum / 10);
            const nodeValue = sum % 10; // 1.2 -> 2

            curr.next = { val: nodeValue, next: null };
            curr = curr.next;
            console.log(v1, v2, carry, dummy)
            l1 = l1?.next ?? null;
            l2 = l2?.next ?? null;
        }

        return dummy.next;
    }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Brute force solution would be to push every node into a list
// remove the nth node from the end
// Then create new linked list using the updated list
// Time Complexity would be O(3n) or O(n)
// Space Complexity would be O(n)

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const nodes = [];

        // push nodes to list
        let curr = head;
        while (curr) {
            nodes.push(curr);
            curr = curr.next;
        }

        // remove nth node
        nodes.splice(nodes.length - n, 1);

        console.log(nodes)

        // create new lonked list
        for (let i = 0; i < nodes.length - 1; i++) {
            nodes[i].next = nodes[i + 1];
        }

        console.log(nodes[nodes.length - 1])

        if (nodes.length > 0) nodes[nodes.length - 1].next = null;

        return nodes[0] || null;
    }
}

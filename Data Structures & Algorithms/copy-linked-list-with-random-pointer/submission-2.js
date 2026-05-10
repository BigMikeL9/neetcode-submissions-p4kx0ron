// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

// Optimal Solution would be to use a hashmap to map nodes to their copies
// We can do so by doing two passes through the nodes.
// The first pass would copy and the second pass would copy the next and previous
// pointers from original to copied nodes
// Time Complexity would be O(n)
// Space Complexity would also be linear O(n)

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const hashMap = new Map();
        
        // create a copy of first level nodes
        let curr = head;
        while (curr) {
            const copy = { val: curr.val, next: null, random: null}
            hashMap.set(curr, copy);
            curr = curr.next;
        }

        // create a copy of pointers (next/previous)
        curr = head;
        while (curr) {
            const copy = hashMap.get(curr);
            copy.next = hashMap.get(curr.next) ?? null;
            copy.random = hashMap.get(curr.random) ?? null;
            curr = curr.next;
        }

        return hashMap.get(head) ?? null
    }
}

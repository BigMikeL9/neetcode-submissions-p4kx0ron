// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

// We need to scan though the list, creating a clone of every node in the process. The problem lies with the random
// nodes which we can't create a clone of if we haven't reached yet. 
// So we do two passes. First pass we store each node and a clone of it in a hashmap as kvp pairs. 
// Second pass though the original list we update the next and random pointer of the clone based on the stored
// nodes in the hashmap

// Time Complexity would be O(2n) or simply O(n)
// Space Complexity would be O(n) for the allocated memory to store the nodes
// where n is the number of nodes in the list

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;
        
        const hashMap = new Map();

        // store nodes
        let curr = head;
        while (curr) {
            hashMap.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        // update clones
        curr = head
        while (curr) {
            const copy = hashMap.get(curr);
            console.log(copy)
            copy.next = hashMap.get(curr.next) ?? null;
            copy.random = hashMap.get(curr.random) ?? null;
            curr = curr.next;
        }

        return hashMap.get(head);
    }
}

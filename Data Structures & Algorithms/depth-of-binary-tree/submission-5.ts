/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

// Breadth First Search would be to count each level in the binary tree
// Time Complexity is O(n)
// Space Complexity is also linear O(n)

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        const queue = [root]
        let levels = 0

        while (queue.length > 0) {
            const currLvls = queue.length;

            for (let i = 0; i < currLvls; i++){
                // remove the curr node
                const curr = queue.shift();
                console.log(curr)
                if (curr.left) queue.push(curr.left)
                if (curr.right) queue.push(curr.right)
            }

            levels++
        }

        return levels;
    }
}

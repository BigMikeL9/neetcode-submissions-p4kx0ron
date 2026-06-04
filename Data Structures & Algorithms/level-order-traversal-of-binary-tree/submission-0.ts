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

// We can use a Breadth First Search algorithm where we store the node values of each level in the tree, in a queue/stack
// as we traverse through the list level by level
// Time Complexity would O(h)
// Space Complexity would also be O(h)
// Where h is the number of levels in the tree

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) return []
        const queue = [root]
        let res = [[root.val]]

        while (queue.length > 0) {
            const levelSize = queue.length;

            let tmpQueue = [];
            for (let i = 0; i < levelSize; i++) {
                const curr = queue.shift()!;
                // console.log(curr, '-----')

                if (curr.left) {
                    queue.push(curr.left)
                    tmpQueue.push(curr.left.val)
                }
                if (curr.right) {
                    queue.push(curr.right)
                    tmpQueue.push(curr.right.val)
                }

            }
            
            console.log(tmpQueue)
            if (tmpQueue.length > 0) res.push(tmpQueue)
        }

        return res
    }
}


 
 

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */

    // -INFINITY < node.val < 2
    // 2 < node.val < INFINITY
    isValidBST(root: TreeNode | null): boolean {

        const dfs = (node: TreeNode, min: number, max: number) => {
            if (!node) return true

            if (min >= node.val) return false
            if (max <= node.val) return false

            const left = dfs(node.left, min, node.val) 
            const right = dfs(node.right, node.val, max)

            return left && right
        }


        return dfs(root, -Infinity, Infinity)
    }
}

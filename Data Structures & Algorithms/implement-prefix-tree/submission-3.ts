class TreeNode {
    children: Map<string, TreeNode>
    isLast: boolean

    constructor() {
        this.children = new Map()
        this.isLast = false
    }
}

class PrefixTree {
    trie: TreeNode

    constructor() {
        this.trie = new TreeNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let curr = this.trie

        for (let i = 0; i < word.length; i++) {
            if (!curr.children.has(word[i])) {
                curr.children.set(word[i], new TreeNode())
            }

            curr = curr.children.get(word[i])
        }
        
        curr.isLast = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let curr = this.trie

        for (const c of word) {
            if (!curr.children.has(c)) return false
            curr = curr.children.get(c)
        }

        return curr.isLast
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let curr = this.trie

        for (const c of prefix) {
            if (!curr.children.has(c)) return false
            curr = curr.children.get(c)
        }

        return true
    }
}

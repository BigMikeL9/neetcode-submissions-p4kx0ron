class TrieNode {
    children: Map<string, TrieNode>
    isLast: boolean
    
    constructor () {
        this.children = new Map()
        this.isLast = false
    }
}

class WordDictionary {
    root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let curr = this.root

        for (const c of word) {
            // if node with letter c doesn't exist, create one
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode())
            }

            curr = curr.children.get(c)
        }

        curr.isLast = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        if (!word) return false

        const dfs = (i: number, curr: TrieNode) => {
            // base case 
            if (i >= word.length) {
                return curr.isLast
            }

            // console.log(i, word[i], curr)

            if (word[i] === '.') {
                // recursivly check every node
                for (const node of curr.children.values()) {
                    if(dfs(i + 1, node)) return true
                }

                return false
            } 
            
            const nextNode = curr.children.get(word[i])

            if (!nextNode) return false
            return dfs(i + 1, nextNode)
        }
        
        return dfs(0, this.root)
    }
}

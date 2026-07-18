class PrefixTree {
    hashset: Set<string>

    constructor() {
        this.hashset = new Set()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        this.hashset.add(word)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        if (!this.hashset.has(word)) return false
        return true
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        for (const w of this.hashset) {
            if (w.startsWith(prefix)) return true
        }

        return false
    }
}

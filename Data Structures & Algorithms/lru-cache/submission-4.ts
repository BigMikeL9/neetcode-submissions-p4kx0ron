
// For the brute force solution, will need to scan through the 
// cache inorder to find the currently used key and move it
// to the start of the cache.

// If cache size exceeds capacity, remove last key in the cache

// Time Compexity is O(n) for finding the key in the cache
// Space Complexity is also linear O(n) for the stored keys in the hashmap and the stack

class LRUCache {
    private capacity: number;
    private hashMap: Map<number, number>;
    private cache: Array<number>;

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.hashMap = new Map();
        this.cache = [];
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.hashMap.has(key)) {
            // update usage
            const index = this.cache.findIndex(k => k === key);
            this.cache.splice(index, 1);
            this.cache.push(key);

            return this.hashMap.get(key);
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        // update usage
        const index = this.cache.findIndex(k => k === key);
        if (index !== -1) this.cache.splice(index, 1);
           
        // insert/update hashMap
        this.hashMap.set(key, value);
        this.cache.push(key);

        console.log(this.hashMap, this.cache, this.cache.length, this.capacity)

        // remove last item if capacity exceeds
        if (this.cache.length > this.capacity) {
            const removed = this.cache.shift();
            this.hashMap.delete(removed);
        };
    }
}

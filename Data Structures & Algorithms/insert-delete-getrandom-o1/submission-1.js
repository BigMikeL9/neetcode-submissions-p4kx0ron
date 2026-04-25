class RandomizedSet {
    constructor() {
        this.arr = [];
        this.hashMap = new Map(); // [val, index]
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.hashMap.has(val)) return false;
        this.hashMap.set(val, this.hashMap.size);
        this.arr.push(val);
        return true;
    }


    // [[1, 0], [2, 1], [3, 2], [4, 3]]
    // [[1, 0], [3, 2], [4, 3]]
    // [[1, 0], [3, 2], [4, 1]]
    // [1, 2, 3, 4] -> [1, 4, 3, 4] -> [1, 4, 3]
    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.hashMap.has(val)) return false;
        // swap last el val with el to delete
        const valIndex = this.hashMap.get(val); // 1
        const lastItemVal = this.arr[this.arr.length - 1]; // 4

        this.hashMap.set(lastItemVal, valIndex);
        this.arr[valIndex] = lastItemVal;

        this.hashMap.delete(val);
        this.arr.pop();
        return true;
    }

    /**
     * @return {number}
     */
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

class KthLargest {
    k: number
    nums: number[]

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.nums.push(val);

        // sort. O(nlogn)
        const sorted = this.nums.sort((a, b) => b - a);
    
        // [5, 3, 3, 3, 2, 1]
        // [6, 5, 3, 3, 3, 2, 1]
        // [8, 6, 5, 3, 3, 3, 2, 1]
        return sorted[this.k - 1]
    }
}

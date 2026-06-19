class KthLargest {
    k: number;
    nums: number[]

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums;

        console.log(nums);
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {

        this.nums.push(val);

        const sorted = this.nums.sort((a, b) => b - a);

        // [1, 2, 3, 3, 3, 5, 6, 7]
        // 8 - 3 = 5
        console.log(sorted);

        return sorted[this.k - 1]
    }
}

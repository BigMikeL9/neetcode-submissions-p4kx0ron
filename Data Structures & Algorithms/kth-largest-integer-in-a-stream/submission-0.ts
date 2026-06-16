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
        const sorted = this.nums.sort((a, b) => a - b);

        // console.log(sorted)
        let res: number = 0;
        console.log(sorted)
        let count = this.k;
        for (let i = sorted.length - 1; i >= 0; i--) {
            count--;
            if (count === 0) {
                console.log(sorted[i])
                res = sorted[i]
            }
        }

        return res
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        const hashSet = new Set<number>();

        for (const n of nums) {
            if (hashSet.has(n)) return n;
            hashSet.add(n);
        }

        return 0;
    }
}

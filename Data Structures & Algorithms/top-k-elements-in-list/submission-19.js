class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = new Map();
        const arr = Array.from({ length: nums.length + 1 }, () => []);
        let res = [];

        // frequency
        for (const n of nums) {
            hashMap.set(n, (hashMap.get(n) || 0) + 1);
        }

        console.log(hashMap, arr)

        // fill buckets using frequency
        // [[], [], [], [], [], []]
        // [[], [1], [2], [3], [], []]
        for (const [key, value] of hashMap) {
            arr[value].push(key);
        }

        

        // get k freq elements
        for (let i = arr.length - 1; i > 0; i--) {
            // if (res.length === k) return res;
            for (const n of arr[i]) {
                if (res.length !== k) res.push(n);
            }
        }

        return res;
    }
}

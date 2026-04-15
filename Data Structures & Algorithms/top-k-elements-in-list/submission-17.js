class Solution {
    // I will use a Bucket sort algorthim where I group all numbers with the same frequency in a bucket.
    // I will do that using a hashMap. I will then return the most frequent k number using using the bucket.
    
    // Get char frequency
    // Create a buckets array where the frequency is used as index (ascending based on freq)
    // Pop highest k frequent elements

    // Time Complexity is O(n)
    // Space Complexity is also O(n)
    // where n is the length of nums

    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const buckets = Array.from({length: nums.length + 1}, (_, i) => []);
        
        // get the freq
        // key: num, val: freq
        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1);
        }

        console.log(count);

        // bucket sort nums based on freq as index
        for (const [key, val] of count) {
            buckets[val].push(key);
        }

        console.log(buckets);
        
        // index is frequency
        let res = [];
        for (var i = buckets.length - 1; i > 0; i--) {
            for (const n of buckets[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }

        console.log(res);

        return res;
    }
}

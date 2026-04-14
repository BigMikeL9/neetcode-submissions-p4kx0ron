class Solution {
    // I will use a hashMap to store the difference betwene the target and the current number
    // as kvp and will check if the diff exist in the hashMap
    // If it does return the indices. 
    // Time Complexity would be O(n) where n is the length of nums
    // Space Complexity is O(n) where n is the length of nums

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            console.log(diff);
            if (hashMap.has(diff)) return [i, hashMap.get(diff)];
            hashMap.set(nums[i], i);
        }

        return [];
    }
}

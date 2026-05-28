class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // we can treat the num values as indices. And use a floyd's algorithm. A slow and a fast pointer. 
    // Fast pointer will always be ahead of the slow pointer by one. When pointers meet, that means we 
    // are in a cycle. 
    // We then need to figure out which number inside that cycle is the duplicate. 
    // To do so we use a third pointer which starts at the first element. When that pointer meets the slow
    // pointer that means that value is our duplicate. 
    // Reason being is that the distance between the start and the distance of the cycle are the same. 

    // Time Complexity is linear O(n)
    // Space Complexity is also linear O(n)
    
    findDuplicate(nums: number[]): number {
        let slow = 0;
        let fast = 0;

        // find entrance
        do {
            slow = nums[slow]; // 1 2 3 2 3
            fast = nums[nums[fast]]; // nums[1] 2, nums[3] 2, nums[3] 2
        } while (slow !== fast)

        console.log(slow)

        // find duplicate -> 
        // distance from the start to the entrance is equal to the distance of the cycle
        let s2 = 0;
        while (s2 !== slow) {
            slow = nums[slow];
            s2 = nums[s2];
            if (s2 === slow) return s2;
        }
    }
}

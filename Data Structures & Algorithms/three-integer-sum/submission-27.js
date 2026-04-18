class Solution { 
    // I will first sort the array and then use three pointers, i, j, and k. As I scan through the 
    // array, I will check if the sum of j and k is equal to the negative value at i. If is it, 
    // then we have our indices which I will store in a res array. If the sum is greater than, then 
    // I will decrement the right pointer. If less than, I will increment the left pointer. 
    // To avoid dulpicate indices, whenever we find the indices, I will move the ponters and 
    // then check if their values is equal to the ones before them.
    
    // Time Complexity is O(nlogn + n^2) or O(n^2)
    // Space Complexity is O(1) excluding the output

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        
        for (let i = 0; i < nums.length; i++) {
            if (i !== 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                if (sum === 0) {
                    res.push([nums[i], nums[l], nums[r]]);

                    // check for other indices with i
                    l++;
                    r--;

                    // skip duplicates
                    while (l < r && nums[l] === nums[l - 1]) l++;
                    while (l < r && nums[r] === nums[r + 1]) r--;
                } 
                else if (sum > 0) r--;
                else l++;
            }       

            console.log(l , r);     
        }

        console.log(res);
        return res;
    }
}

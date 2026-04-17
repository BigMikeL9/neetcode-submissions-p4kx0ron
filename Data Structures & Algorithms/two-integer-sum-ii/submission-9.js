class Solution {
    // I will use a two pointer algorithm where the left pointer start at the first element of the 
    // array and the right pointer will start at the last element. 
    // As I scan through the array, I will check if the sum of the values at the pointers is less than 
    // the target, inwhich case I will move the left pointer to the left. If it is greater than the 
    // target, I will move the right pointer to the left. Until I find the indices and return them.
    
    // Time Complexity is linear or O(n)
    // Space Complexity is constant or O(1)

    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            const sum = numbers[l] + numbers[r];
            
            if (sum === target) return [l + 1, r + 1];

            if (sum < target) l++;
            if (sum > target) r--;
        }        

        return [];
    }
}

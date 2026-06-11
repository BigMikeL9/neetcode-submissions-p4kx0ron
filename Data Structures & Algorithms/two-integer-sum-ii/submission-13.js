class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if (numbers.length === 0) return [];
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            const sum = numbers[r] + numbers[l];

            if (sum < target) l++;
            else if (sum > target) r--;
            else return [l + 1, r + 1]
        }

        return [];
    }
}

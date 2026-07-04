class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l = 0
        let r = numbers.length - 1

        while (l <= r) {
            const sum = numbers[r] + numbers[l]

            if (sum === target) return [l + 1, r + 1]
            else if (sum > target) r--
            else l++
        }

        return []
    }
}

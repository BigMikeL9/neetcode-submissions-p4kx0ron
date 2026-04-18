class Solution {
    // I will use a two pointer, where the left pointer will start at the first bar and the right 
    // pointer at the last. I will get the area bvy using the height of the shorter bar times the 
    // distance between them. And storing the area. 
    // Since we used the shorter bar to get the area, we move its pointer in order to find a bigger
    // area.

    // Time Complexity would be Linear O(n). Brute force would be O(n^2)
    // Space Complexity would be Constant O(1)

    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const area = Math.min(heights[l], heights[r]) * (r - l);
            res = Math.max(res, area);

            // Move a pointer
            // move the pointer at the shorter bar
            if (heights[l] < heights[r]) l++;
            else r--;
        }


        return res;      
    }
}

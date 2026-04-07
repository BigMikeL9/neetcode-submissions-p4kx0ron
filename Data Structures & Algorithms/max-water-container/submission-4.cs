public class Solution {
    // Optimal solution would be to use two pointers, left and right. The left pointer would point
    // to the first element in the array while the right pointer to the last. 
    // I would get the area between the bars at the pointers by multiplying the shorter bar height with the 
    // distance between the bars. Then storing the area in a variable.
    // For every iteration I would compare the curr area with the stored area in the variable.
    // If it is smaller I would move the left pointer to the right and repeat

    // Time Complexity would be O(n) where n is the number of elements in the array
    // Space Complexity would be O(1)

    public int MaxArea(int[] heights) {
        var res = 0;
        var l = 0;
        var r = heights.Length - 1;

        while (l < heights.Length) {
            var area = Math.Min(heights[l], heights[r]) * (r - l);
            Console.WriteLine(area);
            res = Math.Max(res, area);
            if (heights[l] > heights[r]) r--;
            else if(heights[l] < heights[r]) l++;
            else l++;
        }    

        return res;  
    }
}

public class Solution {
    // Optimal solution would be to use two pointers. Left pointer pointed to the first element while
    // right pointer pointed to the last elements. 
    // With each iteration I will calculate the area by multiplying the height of the shorter bar 
    // between the two and multiplying it with the distance between them.
    // And then keep track of the area in a variable which will keep getting updated with every iteration
    // I will then move the pointer pointer to the shorter bar to the center 
    // ** because the shorter bar is the limiting factor **

    // Time Complexity would be O(n) where n is the number of elements in the array
    // Space Complexity would be O(1)

    public int MaxArea(int[] heights) {
        var res = 0;
        var l = 0;
        var r = heights.Length - 1;

        while (l < r) {
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

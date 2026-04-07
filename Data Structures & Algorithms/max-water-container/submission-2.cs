public class Solution {
    // Brute Force solution would be use a nested loop to get the max amount of water a container 
    // can store getting the min height between two pairs and mutliplying it with the distance between
    // them
    // Area = Min(maxHeight, minHeight) * (j - i)
    // Time Complexity would be O(n^2) 
    // Space Complexity would be O(1)

    public int MaxArea(int[] heights) {
        var maxArea = 0;

        for (var i = 0; i < heights.Length; i++) {
            for (var j = i + 1; j < heights.Length; j++) {
                var area = Math.Min(heights[i], heights[j]) * (j - i);
                maxArea = Math.Max(area, maxArea);
            }
        }

        return maxArea;    
    }
}

public class Solution {
    // Brute force solution would be to first sort the nums array 
    // and then use three nested loops to get all the dictinct triplets whose sum is 0
    // Time Complexity would be O(nlogn + n^3) or simply O(n^3) where n is the number of elements 
    // in the nums array
    // Space Complaxity would be O(m + m) or O(m) where m is the number of distinct indices

    public List<List<int>> ThreeSum(int[] nums) {
        var hashSet = new HashSet<(int, int, int)>();
        var res = new List<List<int>>();
        Array.Sort(nums);

        for (var i = 0; i < nums.Length; i++) {
            for (var j = i + 1; j < nums.Length; j++) {
                for (var k = j + 1; k < nums.Length; k++) {
                    var sum = nums[i] + nums[j] + nums[k];
                    if(hashSet.Contains((nums[i], nums[j], nums[k]))) continue;
                    if(sum == 0) hashSet.Add((nums[i], nums[j], nums[k]));
                }
            }
        }

        foreach (var t in hashSet) {
            res.Add(new List<int>() { t.Item1, t.Item2, t.Item3 });
        }

        return res;
    }
}

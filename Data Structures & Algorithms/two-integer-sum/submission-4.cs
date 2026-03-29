public class Solution {
    public int[] TwoSum(int[] nums, int target) {

        var hashMap = new Dictionary<int, int>();
        var indices = new int[2];

        for (var i = 0; i < nums.Length; i++) {

            // 7 - 3 = 4
            var diff = target - nums[i];
            if(hashMap.ContainsKey(diff)) return new int[] {hashMap[diff], i};
            hashMap[nums[i]] = i;
        }

        return indices;
    }
}

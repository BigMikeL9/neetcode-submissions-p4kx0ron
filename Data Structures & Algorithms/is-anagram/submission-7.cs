public class Solution {
    public bool IsAnagram(string s, string t) {
        // Initialise two HashMaps. Add the count of each char in each string to the HashMaps.
        // Time Complexity is O(n + m) because it depends on the number of chars. 
        // Space Complexity is O(n + m)

        // Brute force would be to sort and then use nested loops to compare chars in each string
        // Time Complexity would be O(nlogn + mlogm)
        // Space Complexity would be O(1)

        var sCount = new Dictionary<char, int>();
        var tCount = new Dictionary<char, int>();

        if(s.Length != t.Length) return false;

        foreach (var c in s){
            // Check if key exist, 
            // if does not exist, add it with value 0
            // If exist. increment its value
            var added = sCount.TryAdd(c, 0);
            if(!added) sCount[c] = sCount[c] + 1;
        };

         foreach (var c in t) {
            var added = tCount.TryAdd(c, 0);
            if(!added) tCount[c] = tCount[c] + 1;
        };

        return !sCount.Except(tCount).Any();
    }
}

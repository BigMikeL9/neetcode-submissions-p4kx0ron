public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        // BRUTE FORCE
        // Look up problem. Use a HashMap to store the sorted str in strs as Key along with its anagrams as value
        // Iterate through strs, sort each element. Check if str exist in HashMap.
        // If it doesn't exist, add it with sorted str as key and initialise an empty list of strings as value
        // Then str/anagram to the list of strings in the HashMap
        // Return the dictionary values
        // Time Complexity is O(m * nlogn) where m is the length of strs and n is the length of n (chars count)
        // Space Complexity is O(m) where m is the length of strs

        var res = new Dictionary<string, List<string>>();

        foreach (var s in strs) {
            var chars = s.ToCharArray();
            Array.Sort(chars);
            var sortedS = new string(chars);

            if(!res.ContainsKey(sortedS)) {
                res[sortedS] = new List<string>();
            }

            res[sortedS].Add(s);
        }

        return res.Values.ToList();
    }
}

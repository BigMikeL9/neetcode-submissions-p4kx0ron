public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        // I will a HashMap to store a char frequency string and a list of anagrams for each string as kvp
        // I will use a fixed array of length 26 since we're dealing with lower-case letters which 
        // represents the frequency of each letter in the string from a to z
        // Time Complexity will be O(n * k) where n is the number of strings and k is the number of chars in each string
        // Space Complexity would be O(n) where n is the number of strings. 26 Length fixed array is constant.

        var hashMap = new Dictionary<string, List<string>>();

        foreach (var s in strs) {
            var key = new int[26];

            foreach (var c in s) {
                key[c - 'a']++;
            }

            var keyString = string.Join(',', key);
            if(!hashMap.ContainsKey(keyString)) hashMap[keyString] = new List<string>();
            hashMap[keyString].Add(s);
        }

        return hashMap.Values.ToList();

    }
}

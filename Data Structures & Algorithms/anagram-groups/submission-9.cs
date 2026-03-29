public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        // I would use a HashMap to store the char frequency of each string as key and anagrams as value.
        // As Iterate through the strs array, I would check if the hashMap contians the curr char frequency as key, 
        // if it does, add it to the list of anagrams.
        // if it doesn't, insert a new element in the HashMap
        // Time Complexity is O(n + m) where n is the number of strings and m is the length of each str
        // Space Complexity is O(n) because is worst case we store all strings in the HashMap

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

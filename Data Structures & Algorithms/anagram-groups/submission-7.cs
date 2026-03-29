public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        // Since we're only dealing with lower case chars, we can initliase a new array of ints with 26 elements
        // Use a Hashmap to store the ascii verison of each str as key and their anagrams as value
        // Time Complexity would be O(m * n) where m is the length of strs and n the length of each chars in each str
        // Space Complexity is O(m)

        var map = new Dictionary<string, List<string>>();

        foreach (var s in strs) {
            var count = new int[26];
            foreach (var c in s) {
                count[c - 'a']++;
            }

            var key = string.Join(',', count);

            Console.WriteLine(key);

            if (!map.ContainsKey(key)) {
                map[key] = new List<string>();
            };

            map[key].Add(s);
        }

        return map.Values.ToList();
    }
}

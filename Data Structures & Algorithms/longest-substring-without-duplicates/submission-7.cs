public class Solution {
    // A brute force solutiuon would be to start a substring at every index using a nested loop.
    // We can check if the current substring contains a duplicate by storing its chars in a HashSet
    // for O(1) lookups. If it does, store its length and move to the next index.
    // Time Complexity would be O(n * m) where n is the number of chars in the string and m is the number
    // of unique characters stored in the HashSet
    // Space Complexity is O(m) where m is the number of unique characters
    public int LengthOfLongestSubstring(string s) {
        var length = 0;

        for (var i = 0; i < s.Length; i++) {
            var hashSet = new HashSet<char>();

            for (var j = i; j < s.Length; j++) {
                if(hashSet.Contains(s[j])) break;
                hashSet.Add(s[j]);
                length = Math.Max(hashSet.Count, length);
            }
        }

        return length;
    }
}

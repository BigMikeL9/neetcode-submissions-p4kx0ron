public class Solution {
    // An optimal solution would be to use a two pointer algorithm where every substring is represented
    // as a window that either expands when no duplicates are found, or shrinks when a duplicate is found.
    // A hashSet would be used at every index to keep track of duplicate characters.
    // And the max lenght would be stored 
    // Time Complexity would be O(n) since we're visiting every character at most once
    // Space Complexity would be O(m) where m is the number of unique characters in the array.

    public int LengthOfLongestSubstring(string s) {
        var hashSet = new HashSet<char>();
        var length = 0;
        var l = 0;

        for (var r = 0; r < s.Length; r++) {
            while (hashSet.Contains(s[r])) {
                hashSet.Remove(s[l]);
                l++;        
            };
            
            hashSet.Add(s[r]);
            length = Math.Max(hashSet.Count, length);
        }
        

        return length;
    }
}

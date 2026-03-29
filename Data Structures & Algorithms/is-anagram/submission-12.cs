public class Solution {
    public bool IsAnagram(string s, string t) {
        // Initialise two arrays of 26 characters since string consists of lowercase characters
        // Store the ascii numeric value of each letter in the array. Convert the array values to strings
        // Check for equality
        // Time Complexity is O(1) constant time
        // Space Complexity is O(1)

        var sAscii = new int[26];
        var tAscii = new int[26];

        if(t.Length != s.Length) return false;

        for (var i = 0; i < s.Length; i++) {
            sAscii[s[i] - 'a']++;
            tAscii[t[i] - 'a']++;
        }

        var sString = string.Join(',', sAscii);
        var tString = string.Join(',', tAscii);
        
        if(sString == tString) return true;
        return false;
    }
}

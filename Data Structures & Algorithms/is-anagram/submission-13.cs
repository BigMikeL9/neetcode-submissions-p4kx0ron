public class Solution {
    public bool IsAnagram(string s, string t) {
        // Initialise two arrays of 26 characters since string consists of lowercase characters
        // Store the frequency count of each letter in the array using their ascii numeric values. 
        // Convert the array values to strings. Check for equality
        // Time Complexity is O(n) where n is the length of string 
        // Space Complexity is O(1) because the arrays are fixed size 26

        var sCount = new int[26];
        var tCount = new int[26];

        if(t.Length != s.Length) return false;

        for (var i = 0; i < s.Length; i++) {
            sCount[s[i] - 'a']++;
            tCount[t[i] - 'a']++;
        }

        var sString = string.Join(',', sCount);
        var tString = string.Join(',', tCount);
        
        if(sString == tString) return true;
        return false;
    }
}

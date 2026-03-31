public class Solution {
    // Brute Force solution would be to sort each string and then check for equality. 
    // After checking if string lengths are the same. 
    // Time Complexity would be O(nlogn + mlogm) where n is the number of chars in each string.
    // Space Complexity would be O(n) where n is the number of chars in each string

    // Optimal solution would be, since we know anagarams will consist of lowercase english letters
    // We can initialise two arrays of string of fixed size 26 which will contain characters frequency
    // Iterate through the string, converting each char to its ascii numeric value by subtracting by 'a' 
    // and adding it to the array. Then joining each array and checking for equality 
    // Time Complexity would be O(n + m) where n and m are the number of character in both n and t
    // Space Complexity would be O(26 + 26) or O(1) 

    public bool IsAnagram(string s, string t) {
        var count = new int[26];

        if(s.Length != t.Length) return false;

        for (var i = 0; i < s.Length - 0; i++) {
            count[s[i] - 'a']++;
            count[t[i] - 'a']--;
        }

        foreach (var n in count) {
            if(n != 0) return false;
        }

        return true;
    }
}

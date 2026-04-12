public class Solution {
    // I will use a sliding window algorithm along with a frequency hashmap to figure out
    // how many characters can be replaced in a given window or substring while still being less
    // than or equal to k. I will do that by subtracting the window length by most freq character in the substring
    // if it less than or equal to k, I will record the length and expand the window.
    // If greater than k, then shrink the window.
    // Time Complexity is O(m * n) where m is the number of unique characters and n is the lenght of s
    // Space Complexity O(m) where m is the number of unique characters
    public int CharacterReplacement(string s, int k) {
        var hashMap = new Dictionary<char, int>();
        var res = 0;
        var l = 0;

        for (var r = 0; r < s.Length; r++) {
            if (!hashMap.ContainsKey(s[r])) hashMap[s[r]] = 0;
            hashMap[s[r]]++;

            // windowLength - maxF > k 
            // shrink window and
            while ((r - l + 1) - hashMap.Values.Max() > k) {
                hashMap[s[l]]--;
                l++;
            }

            res = Math.Max(r - l + 1, res);
        }

        return res;
    }
}

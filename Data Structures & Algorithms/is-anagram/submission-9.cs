public class Solution {
    public bool IsAnagram(string s, string t) {
        // Brute for would be to sort each string and then check for equality
        // Time complexity would be O(nlogn + mlogm) where is n is the length of string s and m is of string m
        // Space Complexity would be 0(n + m) since no memory allocation is required

        // Optimised solution would be to use two HashMaps to store char count frequency in each string 
        // as value and char as key.
        // Then iterate through one of the HashMaps checking for equalty in char frequency. 
        // Time Complexity is O(n * m)


        var sChar = s.ToCharArray();
        Array.Sort(sChar);
        var sortedS = new string(sChar);

        var tChar = t.ToCharArray();
        Array.Sort(tChar);
        var sortedT = new string(tChar);

        return sortedS == sortedT;

    }
}

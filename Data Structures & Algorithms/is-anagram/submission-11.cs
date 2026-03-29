public class Solution {
    public bool IsAnagram(string s, string t) {
        // Use a HashMap to store the character frequency of string s 
        // Then subtract the chars frequencies using string t. 
        // If HashMap values are 0, then it is an Anagram
        // Time Complexity is O(n + m) where n and m are the length of string s and t
        // Space Complexity us O(n) where n is the maximum number of chars in string s

        var hashMap = new Dictionary<char, int>();

        if(s.Length != t.Length) return false;

        foreach (var ch in s) {
            if(!hashMap.ContainsKey(ch)) hashMap[ch] = 0;
            hashMap[ch]++;
        }
        
        foreach (var key in hashMap.Keys) {
            Console.WriteLine(key);
        }
        foreach (var v in hashMap.Values) {
            Console.WriteLine(v);
        }
        

        foreach (var ch in t) {
            if(!hashMap.ContainsKey(ch)) return false;
            if(hashMap[ch] == 0) return false;
            hashMap[ch]--;
        }

        foreach (var key in hashMap.Keys) {
            Console.WriteLine(key);
        }
        foreach (var v in hashMap.Values) {
            Console.WriteLine(v);
        }

        return true;
    }
}

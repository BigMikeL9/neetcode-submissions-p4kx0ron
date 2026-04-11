public class Solution {
    // I will use a sliding window along with a frequency hashmap to get the number of characters
    // that can be replced within a given window or substring. I will do that by getting the diff
    // between the window length and the most frequent character in that window, if the result is 
    // less than or equal to k, that means the condition is valid so I will store the length of the 
    // window and expand it. If the condition is not valid, ie: window size - most char freq is greater 
    // than k then I will shrink the window. 
    // Time Complexity would be O(26 * n) or O(m * n) where n is the length of s and m is the 
    // no of unique chars
    // Space Complexity would be O(m) where m is the number of unique chars 
    public int CharacterReplacement(string s, int k) {
        var hashMap = new Dictionary<char, int>();
        var res = 0;
        var l = 0;

        for (var r = 0; r < s.Length; r++) {
            Console.WriteLine("NEW WINDOW");

            // count char frequency for currenct window
            if (!hashMap.ContainsKey(s[r])) hashMap[s[r]] = 0;
            hashMap[s[r]]++;

            foreach (var kvp in hashMap) {
                Console.WriteLine(kvp.Key);
                Console.WriteLine(kvp.Value);
            }
    
            // shrink window if no of chars to be replaced is more then k
            // windowLength - maxF > k
            while ((r - l + 1) - hashMap.Values.Max() > k) {
                hashMap[s[l]]--;
                l++;
            }

            res = Math.Max(r - l + 1, res);
        }

        return res;
    }
}

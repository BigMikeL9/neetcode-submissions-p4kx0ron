public class Solution {
    // Encode: I will create a delimeter that consists of the length of each string and a seperator '#'
    // And append it to string before adding it to a list of string that will be joined and returned. 

    // Decode: I will iterate through each char in the decoded string, scanning for the seperator and then 
    // extracting the string length as an int. Then I will use the length the grab the string and push it 
    // to a list of string that will be returned. 

    // Time Complexity will be O(n + m) where n is the length of the strings array and m is the length of each string
    // Space Complexity is O(n) where n is the length of the strings array

    public string Encode(IList<string> strs) {
        var res = new List<string>();

        foreach (var s in strs) {
            var encoded = $"{s.Length}#{s}";
            res.Add(encoded);
        }

        return string.Join("", res);
    }

    public List<string> Decode(string s) {
        var res = new List<string>();
        var i = 0; // pointer to where im at when scanning through the encoded s

        while (i < s.Length) {
            var j = i; // pointer to the seperator

            // word length pointer
            while (s[j] != '#') {
                j++;
            }

            var length = int.Parse(s.Substring(i, j - i));
            var word = s.Substring(j + 1, length);
            res.Add(word);
            i = j + 1 + length;
        }

        return res;
   }
}

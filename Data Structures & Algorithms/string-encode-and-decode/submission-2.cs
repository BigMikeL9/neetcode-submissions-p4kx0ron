public class Solution {
    // Encode: I will iterate throough strs, creating a delimeter that consists of each 
    // string's length followed by a seperator '#', and append it to the string. 
    // Then add it to new list of strings. Then join the strings in the list and return it.

    // Decode: We scan to # to find the length, then extract exactly that many characters from the string 

    // Time Complexity is O(n + m) where n is the is the length of strs and m is the number of chars in the decoded str
    // Space Complexity is O(n) where is the length of strings

    public string Encode(IList<string> strs) {
        var res = new List<string>();
        
        foreach (var s in strs) {
            var encoded = $"{s.Length}#{s}";
            res.Add(encoded);
        }

        Console.WriteLine(string.Join("", res));
        return string.Join("", res);
    }

    // 5#Hello5#World
    public List<string> Decode(string s) {
        var res = new List<string>();
        var i = 0; // start of the chunk - Points to where the next encoded string begins

        while (i < s.Length) {
            var j = i; // pointer to #
            

            // get the size of length in encoded word
            while (s[j] != '#') {
                j++;
            }
            Console.WriteLine(i);
            Console.WriteLine(j);

            var l = int.Parse(s.Substring(i, j - i));
            // Console.WriteLine(l);
            var word = s.Substring(j + 1, l);
            Console.WriteLine(word);
            res.Add(word);
            i = j + 1 + l;
        }

        return res;
   }
}

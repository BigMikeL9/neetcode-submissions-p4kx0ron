public class Solution {
    // I initialise a new list that will contains each alphanumeric char in the string as lowercase
    // I then iterate through the string checking of it alphanumeric and add it to the list
    // I then join the list of chars and check for equality between it and the reversed string
    // Time Complexity is O(n) where n is the number of characters in the string
    // Space Complexity is O(n + n + n) or O(n) because constants are ignored
    // (n + n + n) is for the newly allocated list and the two joined string used for comparison.

    public bool IsPalindrome(string s) {
        var res = new List<char>();

        foreach (var c in s) {
            if(char.IsLetterOrDigit(c)) res.Add(char.ToLower(c));
        }

        return string.Join("", res) == string.Join("", res.AsEnumerable().Reverse());
    }
}

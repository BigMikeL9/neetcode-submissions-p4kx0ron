public class Solution {
    // I will a two pointer where the left pointer pointing at first element in the array
    // and the right pointer pointing at the last element. 
    // As I iterate through the characters, I will check if any of the values at the pointers 
    // are non-alphanumeric and skip them if they by moving the pointers.
    // If any of the values at the pointers are not equal, I will return false.
    // If they are equal, I will move the pointers inward.

    // Time Complexity is O(n) where n is the number of chars in the string
    // Space Complexity is O(1) since the algorithm does not require any extra memory

    public bool IsPalindrome(string s) {
        var l = 0;
        var r = s.Length - 1;

        while (l < r) {
            while (l < r && !char.IsLetterOrDigit(s[l])) l++;
            while (l < r && !char.IsLetterOrDigit(s[r])) r--;

            Console.WriteLine(s[l]);
            Console.WriteLine(s[r]);

            if (char.ToLower(s[l]) != char.ToLower(s[r])) return false;

            l++;
            r--;
        }

        return true;
    }
}

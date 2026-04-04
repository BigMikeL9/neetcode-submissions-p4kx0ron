public class Solution {
    // I will use a two pointer algorithm to scan through the string from left and right, 
    // skipping non-alphanumeric values and then checking for lowercase char equality. 
    // Time Complexity if O(n) because each pointer moves inward and each char is processed at most once
    // Space Complexity is O(1)

    public bool IsPalindrome(string s) {
        var left = 0;
        var right = s.Length - 1;

        while (left < right) {
            // skip non-alphanumeric value
            if (!char.IsLetterOrDigit(s[left])) {
                left++;
                continue;
            };

            if (!char.IsLetterOrDigit(s[right])) {
                right--;
                continue;
            };

            if(char.ToLower(s[left]) != char.ToLower(s[right])) return false;

            left++;
            right--;
        }

        return true;
    }
}

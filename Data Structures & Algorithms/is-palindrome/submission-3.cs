public class Solution {
    // I will use two pointer algorithm to scan the string from the left and right, checking for equality
    // between the chars in lowercase while ignoring non-alphanumeric values.
    // Time Complexity is Linear O(2n) or O(n) where n is the number of chars in the string
    // Space Complexity is constant O(1) 

    public bool IsPalindrome(string s) {
        var left = 0;
        var right = s.Length - 1;

        while (left < right) {
            // Skip non-alphanumeric values
            while (!char.IsLetterOrDigit(s[left]) && left < right) left++;
            while (!char.IsLetterOrDigit(s[right]) && right > left) right--;

            Console.WriteLine(char.ToLower(s[left]));
            Console.WriteLine(char.ToLower(s[right]));

            if(char.ToLower(s[left]) != char.ToLower(s[right])) return false;

            left++;
            right--;
        }

        return true;
    }
}

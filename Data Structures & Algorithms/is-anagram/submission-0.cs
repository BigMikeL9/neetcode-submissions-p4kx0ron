public class Solution {
    public bool IsAnagram(string s, string t) {
        // Sort each string, then iterate over one each char in one string to check if
        // it is equal to the equivalent char in the other string. 
        // Time complexity is O(s + m) because we iterate over each char in each string once.
        // Where s is the number of char in string s and m is the number of char in string t
        // Space complexity is O(1) because we dont need to allocate extra memory. 

        char[] sCharArr = s.ToCharArray();
        char[] tCharArr = t.ToCharArray();

        Array.Sort(sCharArr);
        Array.Sort(tCharArr);

        if(sCharArr.Length != tCharArr.Length) return false;

        for (var i = 0; i < sCharArr.Length; i++) {
            if(sCharArr[i] != tCharArr[i]) return false;
        }

        return true;
    }
}

public class Solution {
    // I will use a sliding window algorithm and a char count frequency hashmap where
    // I will get the char freq in s1 and the current window. The window size will be the same size 
    // as the length of s1. As I scan through s2, I will check if the current window char freq is the 
    // same as the char freq in s1, if it is that means we have a premutation. If it is not
    // I will move the window to the right by one.
    // Time Complexity would be O(m * n) where m is the number of unique char and n is the lenght of s2
    // since we're only dealing with lower case character which are 26 in total. Time Complexity would be 
    // O(n)
    // Space Complexity would be O(n) with a hashMap but since we're only dealing with lower case characters
    // then we can use a fixed array of size 26 which will result in a Space Complexity of O(1)
    public bool CheckInclusion(string s1, string s2) {
        if (s1.Length > s2.Length) return false;
        var countS1 = new int[26];
        var countS2 = new int[26];
        var l = 0;

        // 'z' - 131
        // 'a' - 96
        for (var i = 0; i < s1.Length; i++) {
            countS1[s1[i] - 'a']++;
        }

        for (var r = 0; r < s2.Length; r++) {
            countS2[s2[r] - 'a']++;

            // 1,1,1,0,0,0,0,0,0,0,0,
            if ((r - l + 1) == s1.Length) {

                // check if count freq is same 
                // if (string.Join("", countS1) == string.Join("", countS2)) return true;
                if (IsSame(countS1, countS2)) return true;

                // if not equal -> move the window to the right
                countS2[s2[l] - 'a']--;
                l++;
            }
        }

        return false;
    }

    bool IsSame(int[] c1, int[] c2 ){
        for (var i = 0; i < c1.Length; i++) {
            if (c1[i] != c2[i]) return false;
        }
        return true;
    }
}

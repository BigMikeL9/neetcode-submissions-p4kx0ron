public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;

        var hashMap = new Dictionary<char, int>();

        for (var i = 0; i < s.Length; i++) {
            hashMap[s[i]] = hashMap.GetValueOrDefault(s[i]) + 1;
            hashMap[t[i]] = hashMap.GetValueOrDefault(t[i]) - 1;
        }

        foreach (var kvp in hashMap) {
            if(kvp.Value != 0) return false;
        }

        return true;
    }
}

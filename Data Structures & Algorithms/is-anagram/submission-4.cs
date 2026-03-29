public class Solution {
    public bool IsAnagram(string s, string t) {
        // Initialise two HashMaps. Add the count of each char in each string to the HashMaps.
        // Time Complexity is O(n + m) because it depends on the number of chars. 
        // Space Complexity is O(n + m)

        // Brute force would be to sort and then use nested loops to compare chars in each string
        // Time Complexity would be O(nlogn + mlogm)
        // Space Complexity would be O(1)

        var sHashMap = new Dictionary<char, int>();
        var tHashMap = new Dictionary<char, int>();

        char[] sCharArr = s.ToCharArray();
        char[] tCharArr = t.ToCharArray();

        if(sCharArr.Length != tCharArr.Length) return false;

        for (var i = 0; i < sCharArr.Length; i++) {
            if(!sHashMap.TryAdd(sCharArr[i], 0)) sHashMap[sCharArr[i]] = sCharArr[i] + 1;
            if(!tHashMap.TryAdd(tCharArr[i], 0)) tHashMap[tCharArr[i]] = tCharArr[i] + 1;
        }

        foreach (var c in tCharArr) {
            if(!sHashMap.ContainsKey(c)) return false;
            if (tHashMap[c] != sHashMap[c]) return false;
        };

        return true;
    }
}

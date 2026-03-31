public class Solution {
    // I will use a HashMap that contain char frequency for a string as key and the a list of anagrams as value
    // Since we're only dealing with lower case english character I will intiliase an array of strings with fixed 
    // size of 26, which will be used to store the char frequency.
    // Time Complexity is O(n * m) where n is the number of elements in strs and m is the number of chars in each string.
    // Space Complexity is O(n) where n is the number of elements in strs and in worst case we could 
    // store all elements in strs array

    public List<List<string>> GroupAnagrams(string[] strs) {
        var hashMap = new Dictionary<string, List<string>>();

        for (var i = 0; i < strs.Length; i++) {
            var keyArr = new char[26];

            for (var j = 0; j < strs[i].Length; j++) {
                keyArr[strs[i][j] - 'a']++;
            }

            var keyS = string.Join(",", keyArr);

            Console.WriteLine(keyS);

            if(!hashMap.ContainsKey(keyS)) hashMap[keyS] = new List<string>();
            hashMap[keyS].Add(strs[i]);
        }

        return hashMap.Values.ToList();
    }
}

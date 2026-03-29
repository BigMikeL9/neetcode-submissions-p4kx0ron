public class Solution {
    public List<List<string>> GroupAnagrams(string[] strs) {
        // Brute Force
        // Sort each element in the strs array, while adding them to a new list
        // Iterate through the new list to find all occurances of a string 
        // and add it to a new List of strings
        // Time Complexity is O(n log n)
        // Space Complexity is 
        
        var groupedAnagrams = new Dictionary<string, List<string>>();

        foreach (var str in strs) {
            char[] chars = str.ToCharArray();
            Array.Sort(chars);
            var sortedStr = new string(chars);
            
            if (!groupedAnagrams.ContainsKey(sortedStr)) {
                groupedAnagrams[sortedStr] = new List<string>();
            }

            groupedAnagrams[sortedStr].Add(str);
        }

        Console.WriteLine(groupedAnagrams.Values);
        
        // Get dict values and insert them to a new List<List<string>>
        return groupedAnagrams.Values.ToList();
    }
}

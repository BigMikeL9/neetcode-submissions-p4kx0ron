public class Solution {
    public bool hasDuplicate(int[] nums) {
        // Initalize an empty HashSet - which is a collection of unique elements ([1, 2, 5])
        // Iterate over element in the array
        // For each element, check if it exists in the HashSet
        // If it does not exist, add it
        // If it does exist, return true
        // If the loop ends with no duplicates found, return false

        HashSet<int> seen = new HashSet<int>();
    
        foreach (var num in nums) {
            if(seen.Contains(num)) return true;
            seen.Add(num);
        }

        return false;
    }
}

// I'll use a Hashset to store each element in the array as I iterate over. I'll check if the element exist in 
// the Hashset, if it does I'll return true. If it doesn't exist, I'll add it to the HashSet.
// Return false after the loop to signal that there was no duplicate items in the HashSet. 
// Time complexity is O(n) because we scan the set once and each lookup/add in a HashSet is O(1)
// Space complexity is O(n) because we had to allocate memory for the HashSet and the size 
// that the Hashet will use could be upto the number of elements in the array


// Brute Force Solution
// Use two loops to compare each element in the array against every other element
// Time Complexity: O(n^2) - Because each element will be iterated over twice
// Space Complexity: O(1) - Because no extra memory will be allocated 
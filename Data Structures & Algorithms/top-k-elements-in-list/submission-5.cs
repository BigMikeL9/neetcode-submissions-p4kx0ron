public class Solution {
    // I will use a HashMap to track the frequency of each num and then I will use 
    // a heap to get the most frequent k elements.
    // Time Complexity is O(n + k) where n is the number of elements in nums
    // Space Complexity is O(n) where n is the number of elements in nums where worst case each num is unique
    // and we store all in the pq

    public int[] TopKFrequent(int[] nums, int k) {
        var hashMap = new Dictionary<int, int>();
        var pq = new PriorityQueue<int, int>();

        foreach (var n in nums) {
            if(!hashMap.ContainsKey(n)) hashMap[n] = 0;
            hashMap[n]++;
        }

        foreach (var kvp in hashMap) {
            pq.Enqueue(kvp.Key, kvp.Value);

            while (pq.Count > k) {
            var dequeued = pq.Dequeue();
            Console.WriteLine(dequeued);
            hashMap.Remove(dequeued);
        }
        }       

        

        return hashMap.Keys.ToArray();
    }
}

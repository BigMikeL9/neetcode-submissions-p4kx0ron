public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        // I will use a HashMap to store each num and its frequency as kvp
        // Then I will use a Heap to get the k most frequent element in the hashmap
        // Time Complexity would be O(nlogk) where n is the length of nums and k is the frequent elements to return 
        // from the heap
        // Space Complexity is O(n + k) where n is the length of nums, in worst case we would store all nums 
        // in the HashMap and k is the length of nums stored in the Heap.

        var hashMap = new Dictionary<int, int>();
        var pq = new PriorityQueue<int, int>(); // min-heap (smaller int - higher priority)

        foreach (var n in nums) {
            if(!hashMap.ContainsKey(n)) hashMap[n] = 0;
            hashMap[n]++;
        }

        foreach (var kvp in hashMap) {
            pq.Enqueue(kvp.Key, kvp.Value);

            if(pq.Count > k) {
                var removed = pq.Dequeue();
                hashMap.Remove(removed);
            }
        }

        return hashMap.Keys.ToArray();
    }
}

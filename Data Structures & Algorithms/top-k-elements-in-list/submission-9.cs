public class Solution {
    // I will use a min-heap to place the elements from highest to lowest priority where lower priority value is 
    // treated as the higher priority, by  using their frequency as the priority value.
    // I will track their frequency by using a HashMap where the key will be the num and the value is the num's
    // frequency
    // Time Complexity would be O(n + n * k) or O(n * k) where n is the number of elements in nums and k is the
    // most frequent elements
    // Space Complexity is O(n + k) for the memory allocation of the HashMap. Where n is the number of elements and 
    // in worst case we store all elements in the hashMap


    public int[] TopKFrequent(int[] nums, int k) {
        var hashMap = new Dictionary<int, int>();
        var pq = new PriorityQueue<int, int>();

        foreach (var n in nums) {
            if(!hashMap.ContainsKey(n)) hashMap[n] = 0;
            hashMap[n]++;
        }

        foreach (var kvp in hashMap) {
            pq.Enqueue(kvp.Key, kvp.Value);

            // as we're queueing elements, remove lowest priority from the bottom of the heap
            while (pq.Count > k) {
                var dequeued = pq.Dequeue();
                hashMap.Remove(dequeued);
            }
        }
        
        return hashMap.Keys.ToArray();
    }
}

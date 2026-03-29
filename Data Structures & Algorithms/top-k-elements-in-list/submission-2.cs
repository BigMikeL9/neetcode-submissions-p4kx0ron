public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        // I would use a HashMap to store each num frequence. 
        // Also initialise a priority queue that queues each num in the hasmap based on their frequency 
        // then convert and return the priorty queue as an array of int
        // Time Complexity would be O(nlogn) where n is the number of nums 
        // Space Complexity would be O(n^2) where n is the length of nums

        var hashMap = new Dictionary<int, int>();
        var pq = new PriorityQueue<int, int>();

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

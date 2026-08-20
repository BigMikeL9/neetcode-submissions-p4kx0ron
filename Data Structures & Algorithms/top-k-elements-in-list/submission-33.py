class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        arr = [[] for _ in range(len(nums) + 1)]
        count = defaultdict(int)
        res = []

        # freq count
        for n in nums:
            count[n] += 1

        # fill buckets
        for key, val in count.items():
            arr[val].append(key)
        
        for i in range(len(nums), -1, -1):
            if len(res) > k:
                break
            for n in arr[i]:
                if len(res) < k:
                    res.append(n)
                else: 
                    break

        return res

        
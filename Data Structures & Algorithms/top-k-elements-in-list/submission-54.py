class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_count = defaultdict(int)
        bucket_sort = [[] for _ in range(len(nums) + 1)]

        # initialise buckets
        # Time: O(n)
        for i in range(len(nums)):
            freq_count[nums[i]] += 1

        # fill buckets by freq
        # Time: O(k)
        for key, val in freq_count.items():
            bucket_sort[val].append(key)

        # [[1], [2], [3]]
        res = []
        for i in range(len(bucket_sort) - 1, -1, -1):
            for n in bucket_sort[i]:
                res.append(n)
                if len(res) == k:
                    return res
        
        return res



        
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        bucket_sort = [[] for _ in range(len(nums) + 1)]
        res = []

        # get count
        hashmap = defaultdict(int)
        for n in nums:
            hashmap[n] += 1

        # fill buckets
        for key, val in hashmap.items():
            bucket_sort[val].append(key)

        # get top k freq
        for i in range(len(bucket_sort) - 1, -1, -1):
            if len(res) >= k:
                break

            for n in bucket_sort[i]:
                if len(res) >= k:
                    break

                res.append(n)

        return res
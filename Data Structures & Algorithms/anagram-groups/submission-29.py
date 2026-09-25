class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashmap = defaultdict(list)

        for s in strs:
            char_freq = [0] * 26

            for c in s:
                char_freq[ord(c) - ord('a')] += 1

            hashmap[tuple(char_freq)].append(s)

        return list(hashmap.values())
        
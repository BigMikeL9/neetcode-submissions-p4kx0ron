class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashmap = defaultdict(list)

        for s in strs:
            char_count = [0] * 26

            for c in s:
                char_count[ord(c) - ord('a')] += 1

            hashmap[tuple(char_count)].append(s)

        return list(hashmap.values()) 

        # Time: O(n * m)
        # Space: O(n) where is worst case we have no anagrams and every s is unique
        # where n is the number of strings and m is the number characters in each string  

        
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashmap = {}

        code_a = ord('a') 

        for s in strs:
            count = [0] * 26

            # get char freq
            for c in s:
                count[ord(c) - code_a] += 1
            
            key = "-".join([str(n) for n in count])
            if not key in hashmap:
                hashmap[key] = []

            hashmap[key].append(s)
        
        return list(hashmap.values())

        
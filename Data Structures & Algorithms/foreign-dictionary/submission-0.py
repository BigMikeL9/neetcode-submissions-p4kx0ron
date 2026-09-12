class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        graph = {c: set() for w in words for c in w}

        for i in range(len(words) - 1):
            w1, w2 = words[i], words[i + 1]
            # if w1 is longer than w2
            # and w2 word is a prefix of w1 -> invalid dict -> return ""
            minLen = min(len(w1), len(w2))
            if len(w1) > len(w2) and w1[:minLen] == w2[:minLen]:
                return ""
            
            for j in range(minLen):
                c1, c2 = w1[j], w2[j]
                # add nei if letters not equal
                if c1 != c2:
                    graph[c1].add(c2)
                    break
            
        print(graph)

        visited = []
        visiting = []
        res = []

        # dfs(w)
        # dfs(e)
        # dfs(r)
        # dfs(t)
        # dfs(f) 
        # dfs(f) -> true -> res = [f] -> res = [f, t] -> res = [f, t, r] -> ...

        def dfs(c):
            if c in visiting:
                return False
            
            if c in visited:
                return True

            visiting.append(c)

            for nei in graph[c]:
                if not dfs(nei):
                    return False

            print(visited, visiting)
            visiting.remove(c)
            visited.append(c)

            res.append(c)
            return True


        for key, val in graph.items():
            if not dfs(key): 
                return ""

        res.reverse()
        print(res)
        return "".join(res)

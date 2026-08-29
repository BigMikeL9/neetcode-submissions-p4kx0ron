class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = defaultdict(list)
        res = []

        tickets.sort(reverse=True)
        
        for from_i, to_i in tickets:
            graph[from_i].append(to_i)

        def dfs(node):
            while graph[node]:
                next_node = graph[node].pop()
                dfs(next_node)
            
            res.append(node)

        dfs("JFK")
        return res[::-1]


        
        
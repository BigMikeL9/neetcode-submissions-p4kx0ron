class Solution:
    def findItinerary(self, tickets: List[List[str]]) -> List[str]:
        graph = {from_i: [] for from_i, to_i in tickets}
        res = []

        tickets.sort(reverse=True)

        for from_i, to_i in tickets:
            graph[from_i].append(to_i)

        print(graph)

        def dfs(node):
            while node in graph and graph[node]:
                next_node = graph[node].pop()
                dfs(next_node)

            # only add when no more neighbors
            # ie: all tickets from this airport are used
            res.append(node)

        dfs("JFK")
        print(res, res[::-1])
        return res[::-1]